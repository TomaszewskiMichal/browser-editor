import { AppProvider } from './AppContextProvider';
import { MainContent, NavBar, GlobalThemeProvider } from './layout';

export const App = () => {
	return (
		<GlobalThemeProvider>
			<AppProvider>
				<NavBar />
				<MainContent />
			</AppProvider>
		</GlobalThemeProvider>
	);
};
