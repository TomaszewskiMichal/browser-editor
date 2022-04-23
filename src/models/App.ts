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
	language: AppProviderLangEnum;
	setLanguage: (lang: string) => void;
	rawCode: string;
}
