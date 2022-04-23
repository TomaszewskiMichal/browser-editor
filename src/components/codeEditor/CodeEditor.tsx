import { useContext } from 'react';
import MonacoEditor from '@monaco-editor/react';

import { AppContext } from '../../AppContextProvider';

export const CodeEditor = () => {
	const { language } = useContext(AppContext);

	return (
		<MonacoEditor
			theme="vs-dark"
			onMount={(monacoEditor) => {
				monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
			}}
			onChange={(value) => console.log(value)}
			language={language}
			height="100%"
			options={{
				wordWrap: 'on',
				minimap: { enabled: false },
				showUnused: true,
				folding: false,
				lineNumbersMinChars: 3,
				fontSize: 13,
				scrollBeyondLastLine: false,
				automaticLayout: true,
			}}
		/>
	);
};
