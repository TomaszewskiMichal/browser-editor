import { useRef, useContext, useEffect } from 'react';

import { MainContext } from '../../layout';
import { previewHtml } from './Preview.model';

export const Preview = () => {
	const iFrameRef = useRef<HTMLIFrameElement | null>(null);
	const { bundled } = useContext(MainContext);

	useEffect(() => {
		if (iFrameRef.current) {
			iFrameRef.current.srcdoc = previewHtml;
			setTimeout(() => iFrameRef.current?.contentWindow?.postMessage(bundled, '*'), 100);
		}
	}, [bundled]);

	return (
		<div className="preview-wrapper">
			<iframe ref={iFrameRef} className="w-full h-full" srcDoc={previewHtml} sandbox="allow-scripts" title="preview" />
		</div>
	);
};
