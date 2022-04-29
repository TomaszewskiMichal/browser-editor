import * as esbuild from 'esbuild-wasm';

export interface AppProviderProps {
	children: React.ReactNode;
}

export enum AppProviderLangEnum {
	JS = 'jsx',
	TS = 'tsx',
}

export interface AppContextType {
	language: {
		selectedLanguage: esbuild.Loader;
		setLanguage: (lang: AppProviderLangEnum) => void;
	};
	infoDialog: {
		open: boolean;
		toggleDialog: (value: boolean) => void;
	};
	code: {
		raw: string | undefined;
		bundled: string | null;
		error: string | null;
		rawCodeChange: (value: string | undefined) => void;
	};
}
