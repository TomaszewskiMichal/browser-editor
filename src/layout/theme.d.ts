import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface CustomTheme extends Theme {
		palette: {
			background: {
				default: string;
				active: string;
			};
		};
	}
	interface CustomThemeOptions extends ThemeOptions {
		palette: {
			background: {
				default: string;
				active: string;
			};
		} & PaletteOptions;
	}
	export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
export interface CustomTheme extends Theme {
	palette: Theme['palette'] &
		PaletteOptions & {
			background: {
				default: string;
				active: string;
			};
		};
}
