import { Dialog as MuiDialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogProps {
	open: boolean;
	handleClose: () => void;
	title: JSX.Element | string;
	content: JSX.Element | string;
}

export const Dialog = ({ open, handleClose, title, content }: DialogProps) => {
	return (
		<MuiDialog open={open} onClose={handleClose} PaperProps={{ sx: { backgroundColor: 'background.default' } }}>
			<DialogTitle
				className="flex justify-between items-center"
				sx={{
					paddingBottom: 0,
					paddingTop: 0,
					height: '50px',
				}}
			>
				{title}
				<CloseIcon className="cursor-pointer" onClick={handleClose} />
			</DialogTitle>
			<DialogContent className="pt-2">{content}</DialogContent>
		</MuiDialog>
	);
};
