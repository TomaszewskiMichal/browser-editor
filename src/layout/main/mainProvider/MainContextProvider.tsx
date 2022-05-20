import { createContext, useEffect, useState, useContext } from 'react';

import { ProviderProps } from '../../../models';
import { useDebouncedText } from '../../../hooks';
import { instance } from '../../../bundler';
import { AppContext } from '../../../app';
import { MainContextType, MainContextState } from './Main.model';

export const MainContext = createContext<MainContextType>({
	raw: '',
	bundled: '',
	error: [],
	rawCodeChange: null,
});

export const MainProvider = ({ children }: ProviderProps) => {
	const { bundlerLanguage } = useContext(AppContext);
	const [mainState, setMainState] = useState<MainContextState>({
		rawCode: '',
		bundle: '',
		error: [],
	});
	const { debounceText, debouncedText } = useDebouncedText();

	useEffect(() => {
		if (debouncedText) {
			setMainState((prev: any) => ({ ...prev, rawCode: debouncedText }));
			bundleCode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedText]);

	const bundleCode = async () => {
		const { errors, outputFiles } = await instance.bundle(
			`
		import _React from "react";
		import _ReactDOM from "react-dom";
		const show=(value)=>{
		const root=document.querySelector('#root');
			if(typeof value === 'object'){
				if(value.$$typeof && value.props) return _ReactDOM.render( value,root)

				return root.innerHTML=JSON.stringify(value)
			};

			return root.innerHTML=value
		};
		${debouncedText}`.replaceAll('console.log', 'show'),
			bundlerLanguage
		);
		setMainState((prev: any) => ({ ...prev, error: errors, bundle: outputFiles[0].text }));
	};

	const handleChangeCode = (value: string | undefined) => {
		if (value) return debounceText(value);
		return setMainState((prev) => ({ ...prev, rawCode: '' }));
	};

	const contextValue = {
		raw: mainState.rawCode,
		bundled: mainState.bundle,
		error: mainState.error,
		rawCodeChange: handleChangeCode,
	};

	return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>;
};
