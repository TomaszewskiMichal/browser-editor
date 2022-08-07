import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin, fetchPlugin } from './plugins';

class Bundler {
	constructor() {
		esbuild.initialize({
			worker: true,
			wasmURL: 'https://www.unpkg.com/esbuild-wasm@0.14.38/esbuild.wasm',
		});
	}

	async bundle(rawCode: string, loader: esbuild.Loader) {
		return await esbuild.build({
			entryPoints: ['index.js'],
			bundle: true,
			write: false,
			plugins: [unpkgPathPlugin(), fetchPlugin(rawCode, loader)],
			define: {
				'process.env.NODE_ENV': '"production"',
				global: 'window',
			},
			jsxFactory: 'React.createElement',
			jsxFragment: 'React.Fragment',
		});
	}
}

export const instance = new Bundler();
