import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
	return {
		name: 'unpkg-path-plugin',
		setup(build: esbuild.PluginBuild) {
			//handle root entry file of 'index.js'
			build.onResolve({ filter: /(^index\.js$)/ }, () => {
				return { path: 'index.js', namespace: 'index' };
			});
			//handle relative paths in a module
			build.onResolve({ filter: /^\.+\// }, (args: any) => {
				return {
					namespace: 'relative',
					path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/').href,
				};
			});
			//handle main file of a module
			build.onResolve({ filter: /.*/ }, (args: any) => {
				return {
					namespace: 'main',
					path: `https://unpkg.com/${args.path}`,
				};
			});
		},
	};
};
