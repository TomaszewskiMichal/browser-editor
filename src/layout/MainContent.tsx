import { Resizable, CodeEditor, Preview, ErrorWindow } from '../components';

import { ResizeDirectionEnum } from '../models';

export const MainContent = () => {
	return (
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
	);
};
