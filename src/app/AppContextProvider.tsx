import { createContext, useState } from 'react';

import { ProviderProps } from '../models';
import { BundlerLanguageEnum, AppContextType, AppContextState, AppCodeEditorEnum } from './App.model';

export const AppContext = createContext<AppContextType>({
	bundlerLanguage: BundlerLanguageEnum.JS,
	codeEditorLanguage: AppCodeEditorEnum.JS,
	setLanguage: null,
});

export const AppProvider = ({ children }: ProviderProps) => {
	const [appState, setAppState] = useState<AppContextState>({
		bundlerLanguage: BundlerLanguageEnum.JS,
		codeEditorLanguage: AppCodeEditorEnum.JS,
	});

	const setLanguage = (lang: AppCodeEditorEnum) =>
		setAppState((prev: any) => ({
			...prev,
			codeEditorLanguage: lang,
			bundlerLanguage: lang === AppCodeEditorEnum.JS ? BundlerLanguageEnum.JS : BundlerLanguageEnum.TS,
		}));

	const contextValue = {
		bundlerLanguage: appState.bundlerLanguage,
		codeEditorLanguage: appState.codeEditorLanguage,
		setLanguage,
	};

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
