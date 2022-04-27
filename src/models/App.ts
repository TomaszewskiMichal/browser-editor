import esbuild from 'esbuild-wasm';

export interface AppProviderProps {
	children: React.ReactNode;
}

export enum AppProviderLangEnum {
	JS = 'javascript',
	TS = 'typescript',
}

export interface AppContextType {
	bundler: any; //typeof esbuild | null;
	language: {
		selectedLanguage: AppProviderLangEnum;
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
