export enum BundlerLanguageEnum {
	JS = 'jsx',
	TS = 'tsx',
}

export enum AppCodeEditorEnum {
	JS = 'javascript',
	TS = 'typescript',
}

export interface AppContextType {
	bundlerLanguage: BundlerLanguageEnum;
	codeEditorLanguage: AppCodeEditorEnum;
	setLanguage: null | ((lang: AppCodeEditorEnum) => void);
	isReactEnabled: boolean;
	setIsReactEnabled: null | ((value: boolean) => void);
	debounceTime: number;
	setDebounceTime: null | ((value: number) => void);
}

export interface AppContextState {
	codeEditorLanguage: AppCodeEditorEnum;
	bundlerLanguage: BundlerLanguageEnum;
	isReactEnabled: boolean;
	debounceTime: number;
}

export const defaultAppContextValues = {
	bundlerLanguage: BundlerLanguageEnum.JS,
	codeEditorLanguage: AppCodeEditorEnum.JS,
	isReactEnabled: true,
	debounceTime: 1500,
};
