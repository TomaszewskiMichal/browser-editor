import { createContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { AppProviderProps, AppProviderLangEnum, AppContextType } from './models';
import { useDebouncedText } from './hooks';

export const AppContext = createContext<AppContextType>({
	bundler: null,
	language: {
		selectedLanguage: AppProviderLangEnum.JS,
		setLanguage: (value) => {},
	},
	code: {
		raw: '',
		bundled: '',
		error: '',
		rawCodeChange: (value) => {},
	},
	infoDialog: {
		open: false,
		toggleDialog: (value) => {},
	},
});

export const AppProvider = ({ children }: AppProviderProps) => {
	const [appState, setAppState] = useState({ language: AppProviderLangEnum.JS, rawCode: '', infoOpen: false });
	const { debounceText, debouncedText } = useDebouncedText();

	useEffect(() => {
		if (debouncedText) setAppState((prev) => ({ ...prev, rawCode: debouncedText }));
	}, [debouncedText]);

	const bundler = async () => {};
	const setLanguage = (lang: AppProviderLangEnum) => setAppState((prev) => ({ ...prev, language: lang }));
	const toggleDialog = (value: boolean) => setAppState((prev) => ({ ...prev, infoOpen: value }));
	const handleChangeCode = (value: string | undefined) => {
		if (value) debounceText(value);
	};

	const contextValue = {
		bundler,
		language: {
			selectedLanguage: appState.language,
			setLanguage,
		},
		code: {
			raw: appState.rawCode,
			bundled: '',
			error: '',
			rawCodeChange: handleChangeCode,
		},
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
