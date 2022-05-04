import { Menu as MuiMenu, MenuItem, Typography } from '@mui/material';
import { AppCodeEditorEnum } from '../../app';

interface MenuProps {
	anchor: Element | null;
	onClose: () => void;
	options: any[];
	handleOptionClick: (option: any) => void;
	active: any;
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
			{options.map((option: AppCodeEditorEnum) => (
				<MenuItem key={option} onClick={() => handleOptionClick(option)}>
					<Typography className={option === active ? 'text-green-600' : 'text-red-600'} textAlign="center">
						{option}
					</Typography>
				</MenuItem>
			))}
		</MuiMenu>
	);
};
