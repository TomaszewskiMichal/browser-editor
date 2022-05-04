import { useContext } from 'react';
import MonacoEditor from '@monaco-editor/react';

import { AppContext } from '../../app';
import { MainContext } from '../../layout';

export const CodeEditor = () => {
	const { codeEditorLanguage } = useContext(AppContext);
	const { raw, rawCodeChange } = useContext(MainContext);

	if (!rawCodeChange) return <div />;
	return (
		<MonacoEditor
			theme="vs-dark"
			onMount={(monacoEditor) => {
				monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
			}}
			width="calc(100% - 9px)"
			onChange={rawCodeChange}
			value={raw}
			language={codeEditorLanguage}
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
