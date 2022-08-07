import { Popover } from '@mui/material';
import { useState } from 'react';

interface MenuProps {
	children: (setAnchor: (element: Element | null) => void) => React.ReactNode;
	controlComponent: (setAnchor: (element: Element | null) => void) => React.ReactNode;
}

export const Menu = ({ children, controlComponent }: MenuProps) => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const onClose = () => setAnchorEl(null);

	return (
		<>
			{controlComponent(setAnchorEl)}
			<Popover
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={!!anchorEl}
				onClose={onClose}
				PaperProps={{
					sx: {
						p: 1,
						borderRadius: 5,
					},
				}}
			>
				{children(setAnchorEl)}
			</Popover>
		</>
	);
};
