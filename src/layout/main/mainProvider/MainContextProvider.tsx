import { createContext, useEffect, useState, useContext, useMemo } from 'react';

import { ProviderProps } from '../../../models';
import { useDebouncedText } from '../../../hooks';
import { instance } from '../../../bundler';
import { AppContext } from '../../../app';
import { MainContextType, MainContextState } from './Main.model';

export const MainContext = createContext<MainContextType>({
	raw: '',
	bundled: '',
	errors: [],
	rawCodeChange: null,
});

export const MainProvider = ({ children }: ProviderProps) => {
	const { bundlerLanguage, isReactEnabled, debounceTime } = useContext(AppContext);
	const [mainState, setMainState] = useState<MainContextState>({
		rawCode: '',
		bundle: '',
		errors: [],
	});
	const { debounceText, debouncedText } = useDebouncedText(debounceTime);

	useEffect(() => {
		if (debouncedText) {
			setMainState((prev: any) => ({ ...prev, rawCode: debouncedText }));
			bundleCode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedText, isReactEnabled]);

	//TODO wcześniej było JSON.stringify(value)
	const defaultBundle = useMemo(
		() =>
			isReactEnabled
				? `
	import React from "react";
	import ReactDOM from "react-dom";
	const show=(value)=>{
	const root=document.querySelector('#root');
		if(typeof value === 'object'){
			if(value.$$typeof && value.props) return ReactDOM.render( value,root)

			return root.innerHTML=root.innerHTML+' '+value
		};

		return root.innerHTML=value
	};
	${debouncedText}`.replaceAll('console.log', 'show')
				: `
					const show=(value)=>{
						return root.innerHTML=root.innerHTML+' '+value
					};
					${debouncedText}`.replaceAll('console.log', 'show'),
		[debouncedText, isReactEnabled]
	);

	const bundleCode = async () => {
		const { errors, outputFiles } = await instance.bundle(defaultBundle, bundlerLanguage);
		setMainState((prev) => ({ ...prev, errors: errors, bundle: outputFiles[0].text }));
	};

	const handleChangeCode = (value: string | undefined) => {
		if (value) return debounceText(value);
		return setMainState((prev) => ({ ...prev, rawCode: '' }));
	};

	const contextValue = {
		raw: mainState.rawCode,
		bundled: mainState.bundle,
		errors: mainState.errors,
		rawCodeChange: handleChangeCode,
	};

	return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>;
};
