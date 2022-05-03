import { useContext, useState, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

import { AppContext } from '../AppContextProvider';
import { AppCodeEditorEnum } from '../models';
import { Menu } from '../components';

const languages = [AppCodeEditorEnum.JS, AppCodeEditorEnum.TS];

export const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const anchorRef = useRef(null);
	const {
		language: { selectedLanguage, setLanguage },
		code: { raw },
		infoDialog: { open, toggleDialog },
	} = useContext(AppContext);

	const handleClick = (option: AppCodeEditorEnum) => {
		setLanguage(option);
		setAnchorEl(null);
	};
	const handleClose = () => toggleDialog(false);

	return !raw ? (
		<div className="absolute top-0 right-2 cursor-pointer z-10">
			<SettingsIcon onClick={() => setAnchorEl(anchorRef.current)} ref={anchorRef} />
			<HelpIcon onClick={() => toggleDialog(true)} />
			<Menu
				anchor={anchorEl}
				onClose={() => setAnchorEl(null)}
				active={selectedLanguage}
				options={languages}
				handleOptionClick={handleClick}
			/>
			<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { backgroundColor: 'background.default' } }}>
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
					<Typography variant="h4">
						On this site you can write code using npm packages, Javascript or Typescript.
					</Typography>
					<br />
					<Typography variant="h4">Unfortunately you can't use LocaleStorage.</Typography>
				</DialogContent>
			</Dialog>
		</div>
	) : (
		<div />
	);
};
