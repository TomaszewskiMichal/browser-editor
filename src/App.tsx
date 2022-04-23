import { AppProvider } from './AppContextProvider';
import { MainContent, NavBar } from './layout';

export const App = () => {
	return (
		<AppProvider>
			<NavBar />
			<MainContent />
		</AppProvider>
	);
};
