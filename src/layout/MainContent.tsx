import { Resizable, CodeEditor } from '../components';

import { ResizeDirectionEnum } from '../models';

export const MainContent = () => {
	return (
		<div className="w-full h-full flex">
			<Resizable direction={ResizeDirectionEnum.HORIZONTAL}>
				<CodeEditor />
			</Resizable>
			<div className="flex-grow relative overflow-hidden flex-col h-full">
				<Resizable direction={ResizeDirectionEnum.VERTICAL}>
					<iframe title="preview" />
				</Resizable>
				{/* <div>OtherText</div> */}
			</div>
		</div>
	);
};
