import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#efefef',
			active: '#4f19d2b8',
		},
		primary: {
			main: '#4f19d2',
		},
	},
});

export const GlobalThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
