import { Message } from 'esbuild-wasm';

export interface MainContextType {
	raw: string;
	bundled: string;
	errors: Message[];
	rawCodeChange: null | ((value: string | undefined) => void);
}

export interface MainContextState {
	rawCode: string;
	bundle: string;
	errors: Message[];
}
