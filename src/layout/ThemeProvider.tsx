import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#efefef',
		},
		// primary: {
		// 	main: '',
		// },
		// secondary: {
		// 	main: '',
		// },
	},
});

export const GlobalThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
