import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin, fetchPlugin } from './plugins';

let service: esbuild.Service;

export const bundler = async (rawCode: string, loader: esbuild.Loader) => {
	if (!service) {
		service = await esbuild.startService({
			worker: true,
			wasmURL: 'https://www.unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
		});
	}
	return await service.build({
		entryPoints: ['index.js'],
		bundle: true,
		write: false,
		plugins: [unpkgPathPlugin(), fetchPlugin(rawCode, loader)],
		define: {
			'process.env.NODE_ENV': '"production"',
			global: 'window',
		},
		jsxFactory: '_React.createElement',
		jsxFragment: '_React.Fragment',
	});
};
