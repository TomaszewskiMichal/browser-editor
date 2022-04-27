import { Resizable, CodeEditor } from '../components';

import { ResizeDirectionEnum } from '../models';

export const MainContent = () => {
	return (
		<div className="w-full h-full flex">
			<Resizable direction={ResizeDirectionEnum.HORIZONTAL}>
				<CodeEditor />
			</Resizable>
			<div className="flex-grow relative flex-col h-full">
				<Resizable direction={ResizeDirectionEnum.VERTICAL}>
					<div className="preview-wrapper">
						<iframe className="w-full h-full" title="preview" />
					</div>
				</Resizable>
				<div>OtherText</div>
			</div>
		</div>
	);
};
