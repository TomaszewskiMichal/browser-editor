import { Resizable, CodeEditor } from '../components';

import { ResizeDirectionEnum } from '../models';

export const MainContent = () => {
	return (
		<div className="flex h-full flex-row">
			<Resizable direction={ResizeDirectionEnum.HORIZONTAL}>
				<CodeEditor />
			</Resizable>
		</div>
	);
};
