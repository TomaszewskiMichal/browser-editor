import { createContext, useState } from 'react';
import { Box } from '@mui/material';
import { AppProviderProps, AppProviderLangEnum } from './models';

export const AppContext = createContext<any>({
	bundler: null,
	language: AppProviderLangEnum.JS,
	setLanguage: () => {},
	rawCode: null,
});

export const AppProvider = ({ children }: AppProviderProps) => {
	const [appState, setAppState] = useState({ language: AppProviderLangEnum.JS, rawCode: '' });

	const bundler = async () => {};
	const setLanguage = (lang: AppProviderLangEnum) => setAppState((prev) => ({ ...prev, language: lang }));

	const contextValue = {
		bundler,
		language: appState.language,
		setLanguage,
		rawCode: appState.rawCode,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<Box sx={{ height: '100vh', width: '100vw' }}> {children}</Box>
		</AppContext.Provider>
	);
};
