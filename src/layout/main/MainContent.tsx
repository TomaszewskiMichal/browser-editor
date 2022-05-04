import { Resizable, ResizeDirectionEnum, CodeEditor, Preview, ErrorWindow } from '../../components';
import { MainProvider } from './mainProvider/MainContextProvider';

export const MainContent = () => {
	return (
		<MainProvider>
			<div className="w-full h-full flex">
				<Resizable direction={ResizeDirectionEnum.HORIZONTAL}>
					<CodeEditor />
				</Resizable>
				<div className="flex-grow relative flex-col h-full">
					<Resizable direction={ResizeDirectionEnum.VERTICAL}>
						<Preview />
					</Resizable>
					<ErrorWindow />
				</div>
			</div>
		</MainProvider>
	);
};
