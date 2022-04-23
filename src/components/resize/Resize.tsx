import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

import { ResizableProps, ResizeDimensionState, ResizeDirectionEnum } from '../../models';

export const Resizable = ({ direction, children }: ResizableProps) => {
	const [dimensions, setDimension] = useState<ResizeDimensionState>({
		initialHeight: window.innerHeight,
		initialWidth: window.innerWidth,
		width: window.innerWidth * 0.5,
	});

	useEffect(() => {
		let timer: NodeJS.Timeout;
		const listener = () => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				setDimension((prev) => ({ ...prev, width: window.innerWidth, height: window.innerHeight }));
				if (window.innerWidth * 0.5 < dimensions.width) {
					setDimension((prev) => ({ ...prev, width: window.innerWidth * 0.5 }));
				}
			}, 100);
		};
		window.addEventListener('resize', listener);

		return () => {
			window.removeEventListener('resize', listener);
		};
	}, [dimensions.width]);

	const resizableBoxProps: ResizableBoxProps =
		direction === ResizeDirectionEnum.HORIZONTAL
			? {
					className: 'flex flex-row',
					resizeHandles: ['e'],
					width: dimensions.width,
					minConstraints: [dimensions.initialWidth * 0.2, Infinity],
					maxConstraints: [dimensions.initialWidth * 0.75, Infinity],
					height: Infinity,
					onResizeStop: (event, data) => setDimension((prev) => ({ ...prev, width: data.size.width })),
			  }
			: {
					resizeHandles: ['s'],
					minConstraints: [Infinity, 24],
					width: Infinity,
					maxConstraints: [Infinity, dimensions.initialHeight * 0.98],
					height: 300,
			  };

	return <ResizableBox {...resizableBoxProps}>{children}</ResizableBox>;
};
