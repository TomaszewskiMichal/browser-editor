import { createContext, useState } from 'react';
import { Box } from '@mui/material';
import { AppProviderProps, AppProviderLangEnum, AppContextType } from './models';

export const AppContext = createContext<AppContextType>({
	bundler: null,
	language: {
		selectedLanguage: AppProviderLangEnum.JS,
		setLanguage: (value) => {},
	},
	rawCode: null,
	infoDialog: {
		open: false,
		toggleDialog: (value) => {},
	},
});

export const AppProvider = ({ children }: AppProviderProps) => {
	const [appState, setAppState] = useState({ language: AppProviderLangEnum.JS, rawCode: '', infoOpen: false });

	const bundler = async () => {};
	const setLanguage = (lang: AppProviderLangEnum) => setAppState((prev) => ({ ...prev, language: lang }));
	const toggleDialog = (value: boolean) => setAppState((prev) => ({ ...prev, infoOpen: value }));
	const contextValue = {
		bundler,
		language: {
			selectedLanguage: appState.language,
			setLanguage,
		},
		rawCode: appState.rawCode,
		infoDialog: {
			open: appState.infoOpen,
			toggleDialog,
		},
	};

	return (
		<AppContext.Provider value={contextValue}>
			<Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'background.default' }}> {children}</Box>
		</AppContext.Provider>
	);
};
