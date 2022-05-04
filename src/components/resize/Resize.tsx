import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

import { ResizableProps, ResizeDimensionState, ResizeDirectionEnum } from './Resize.model';

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

		return () => window.removeEventListener('resize', listener);
	}, [dimensions.width]);

	const resizableBoxProps: ResizableBoxProps =
		direction === ResizeDirectionEnum.HORIZONTAL
			? {
					className: 'flex flex-row h-full',
					resizeHandles: ['e'],
					width: dimensions.width,
					minConstraints: [dimensions.initialWidth * 0.2, Infinity],
					maxConstraints: [dimensions.initialWidth * 0.75, Infinity],
					height: Infinity,
					onResizeStop: (_, value) => setDimension((prev) => ({ ...prev, width: value.size.width })),
			  }
			: {
					className: 'h-full',
					resizeHandles: ['s'],
					minConstraints: [Infinity, dimensions.initialHeight * 0.2],
					width: Infinity,
					maxConstraints: [Infinity, dimensions.initialHeight * 0.75],
					height: 300,
			  };

	return <ResizableBox {...resizableBoxProps}>{children}</ResizableBox>;
};
