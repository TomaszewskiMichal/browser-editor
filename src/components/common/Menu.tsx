import { Menu as MuiMenu, MenuItem, styled, Typography, alpha } from '@mui/material';

import { CustomTheme } from '../../layout/theme';
import { AppCodeEditorEnum } from '../../app';

interface MenuProps {
	anchor: Element | null;
	onClose: () => void;
	options: any[];
	handleOptionClick: (option: any) => void;
	active: any;
}

const StyledMenuItem = styled(MenuItem)(({ theme }: { theme: CustomTheme }) => ({
	'&:hover, &:focus': {
		backgroundColor: alpha(theme.palette.primary.main, 0.5),
	},
}));

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
			classes={{
				list: '!py-0',
			}}
			open={Boolean(anchor)}
			onClose={onClose}
		>
			{options.map((option: AppCodeEditorEnum) => (
				<StyledMenuItem
					sx={{
						backgroundColor: option === active ? 'background.active' : 'background.default',
					}}
					key={option}
					onClick={() => handleOptionClick(option)}
				>
					<Typography textAlign="center">{option}</Typography>
				</StyledMenuItem>
			))}
		</MuiMenu>
	);
};
