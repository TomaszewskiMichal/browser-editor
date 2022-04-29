import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin, fetchPlugin } from './plugins';

export const bundler = (rawCode: string, loader: esbuild.Loader) =>
	esbuild
		.initialize({
			worker: false,
			wasmURL: 'https://unpkg.com/esbuild-wasm@0.14.38/esbuild.wasm',
		})
		.then(() => {
			return esbuild.build({
				entryPoints: ['index.js'],
				bundle: true,
				write: false,
				define: { 'process.env.NODE_ENV': '"production"', global: 'window' },
				plugins: [unpkgPathPlugin(), fetchPlugin(rawCode, loader)],
			});
		})
		.catch((err) => console.log(err));
