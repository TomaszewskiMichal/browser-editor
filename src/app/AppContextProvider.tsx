import { createContext, useState } from 'react';

import { ProviderProps } from '../models';
import {
	BundlerLanguageEnum,
	defaultAppContextValues,
	AppContextType,
	AppContextState,
	AppCodeEditorEnum,
} from './App.model';

export const AppContext = createContext<AppContextType>({
	...defaultAppContextValues,
	setLanguage: null,
	setIsReactEnabled: null,
	setDebounceTime: null,
});

export const AppProvider = ({ children }: ProviderProps) => {
	const [appState, setAppState] = useState<AppContextState>(defaultAppContextValues);

	const setLanguage = (lang: AppCodeEditorEnum) =>
		setAppState((prev: any) => ({
			...prev,
			codeEditorLanguage: lang,
			bundlerLanguage: lang === AppCodeEditorEnum.JS ? BundlerLanguageEnum.JS : BundlerLanguageEnum.TS,
		}));

	const setIsReactEnabled = (isReactEnabled: boolean) => setAppState((prev) => ({ ...prev, isReactEnabled }));
	const setDebounceTime = (debounceTime: number) => setAppState((prev) => ({ ...prev, debounceTime }));

	const contextValue = {
		bundlerLanguage: appState.bundlerLanguage,
		codeEditorLanguage: appState.codeEditorLanguage,
		setLanguage,
		isReactEnabled: appState.isReactEnabled,
		setIsReactEnabled,
		debounceTime: appState.debounceTime,
		setDebounceTime,
	};

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
