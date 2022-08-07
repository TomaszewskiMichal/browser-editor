import { Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Button } from './Button';

interface DialogProps {
	open: boolean;
	handleClose: () => void;
	title: React.ReactNode | string;
	content: React.ReactNode | string;
	customActions?: React.ReactNode;
}

export const Dialog = ({ open, handleClose, title, content, customActions }: DialogProps) => {
	return (
		<MuiDialog
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: { borderRadius: '50px', backgroundColor: 'background.default' } }}
		>
			<DialogTitle
				className="flex justify-end items-center"
				sx={{
					paddingBottom: 0,
					paddingTop: 0,
					height: '50px',
				}}
			>
				<CloseIcon className="cursor-pointer" onClick={handleClose} />
			</DialogTitle>
			<DialogContent className="pt-2">
				<div className="mb-10 border-b-4 border-black">
					<Typography className="flex justify-center" variant="h3" align="center" component="span">
						{title}
					</Typography>
				</div>
				<div className="w-5/6 mx-auto">{content}</div>
			</DialogContent>
			<DialogActions className="flex !justify-center">
				{customActions ?? (
					<Button variant="contained" onClick={handleClose}>
						{'Close'}
					</Button>
				)}
			</DialogActions>
		</MuiDialog>
	);
};
