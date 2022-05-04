import { Box } from '@mui/material';

import { AppProvider } from './AppContextProvider';
import { MainContent, AppBar, GlobalThemeProvider } from '../layout';

export const App = () => {
	return (
		<GlobalThemeProvider>
			<AppProvider>
				<Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'background.default' }}>
					<AppBar />
					<MainContent />
				</Box>
			</AppProvider>
		</GlobalThemeProvider>
	);
};
