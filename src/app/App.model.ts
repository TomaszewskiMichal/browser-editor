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
}

export interface AppContextState {
	codeEditorLanguage: AppCodeEditorEnum;
	bundlerLanguage: BundlerLanguageEnum;
}
