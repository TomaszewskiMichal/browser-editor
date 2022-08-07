import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#efefef',
			active: '#1B39A5',
		},
		primary: {
			main: '#1B39A5',
		},
	},
});

export const GlobalThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
