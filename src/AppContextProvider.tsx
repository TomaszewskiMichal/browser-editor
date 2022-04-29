import { createContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { AppProviderProps, AppProviderLangEnum, AppContextType } from './models';
import { useDebouncedText } from './hooks';
import { bundler } from './bundler';

export const AppContext = createContext<AppContextType>({
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
	const [appState, setAppState] = useState({
		language: AppProviderLangEnum.JS,
		rawCode: '',
		bundle: '',
		error: '',
		infoOpen: false,
	});
	const { debounceText, debouncedText } = useDebouncedText();

	useEffect(() => {
		if (debouncedText) {
			setAppState((prev) => ({ ...prev, rawCode: debouncedText }));
			bundleCode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedText]);

	const bundleCode = async () => {
		const { errors, outputFiles } = (await bundler(debouncedText, appState.language)) as any;
		setAppState((prev) => ({ ...prev, error: errors, bundle: outputFiles[0].text }));
	};
	const setLanguage = (lang: AppProviderLangEnum) => setAppState((prev) => ({ ...prev, language: lang }));
	const toggleDialog = (value: boolean) => setAppState((prev) => ({ ...prev, infoOpen: value }));
	const handleChangeCode = (value: string | undefined) => {
		if (value) debounceText(value);
	};

	const contextValue = {
		language: {
			selectedLanguage: appState.language,
			setLanguage,
		},
		code: {
			raw: appState.rawCode,
			bundled: appState.bundle,
			error: appState.error,
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
