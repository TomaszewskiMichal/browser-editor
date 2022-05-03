import * as esbuild from 'esbuild-wasm';

export interface AppProviderProps {
	children: React.ReactNode;
}

export interface AppProviderState {
	language: AppCodeEditorEnum;
	rawCode: string;
	bundle: string;
	error: esbuild.Message[];
	infoOpen: false;
}

export enum AppProviderLangEnum {
	JS = 'jsx',
	TS = 'tsx',
}

export enum AppCodeEditorEnum {
	JS = 'javascript',
	TS = 'typescript',
}

export interface AppContextType {
	language: {
		selectedLanguage: AppCodeEditorEnum;
		setLanguage: (lang: AppCodeEditorEnum) => void;
	};
	infoDialog: {
		open: boolean;
		toggleDialog: (value: boolean) => void;
	};
	code: {
		raw: string | undefined;
		bundled: string | null;
		error: esbuild.Message[] | null;
		rawCodeChange: (value: string | undefined) => void;
	};
}
