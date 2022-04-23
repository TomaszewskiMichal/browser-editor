import { Menu as MuiMenu, MenuItem, Typography } from '@mui/material';

interface MenuProps {
	anchor: Element | null;
	onClose: () => void;
	options: string[];
	handleOptionClick: (option: string) => void;
	active: string;
}

export const Menu = ({ anchor, onClose, options, handleOptionClick, active }: MenuProps) => {
	return (
		<MuiMenu
			anchorEl={anchor}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={Boolean(anchor)}
			onClose={onClose}
		>
			{options.map((option: string) => (
				<MenuItem key={option} onClick={() => handleOptionClick(option)}>
					<Typography className={option === active ? 'text-green-600' : 'text-red-600'} textAlign="center">
						{option}
					</Typography>
				</MenuItem>
			))}
		</MuiMenu>
	);
};
