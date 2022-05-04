export enum ResizeDirectionEnum {
	HORIZONTAL = 'HORIZONTAL',
	VERTICAL = 'VERTICAL',
}

export type ResizeDimensionState = { initialHeight: number; initialWidth: number; width: number };

export interface ResizableProps {
	direction: ResizeDirectionEnum;
	children: React.ReactNode;
}
