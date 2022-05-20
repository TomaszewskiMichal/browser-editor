import { useContext, useState, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

import { AppContext, AppCodeEditorEnum } from '../../../app';
import { Menu } from '../../../components';

const languages = [AppCodeEditorEnum.JS, AppCodeEditorEnum.TS];

interface AppBarActionsProps {
	handleOpenDialog: () => void;
}

export const AppBarActions = ({ handleOpenDialog }: AppBarActionsProps) => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const anchorRef = useRef(null);
	const { codeEditorLanguage, setLanguage } = useContext(AppContext);

	const handleClick = (option: AppCodeEditorEnum) => {
		if (setLanguage) {
			setLanguage(option);
			setAnchorEl(null);
		}
	};
	return (
		<div className="absolute top-0 right-2 cursor-pointer z-10 opacity-25 transform transition duration-500 hover:opacity-100">
			<SettingsIcon onClick={() => setAnchorEl(anchorRef.current)} ref={anchorRef} />
			<HelpIcon onClick={handleOpenDialog} />
			<Menu
				anchor={anchorEl}
				onClose={() => setAnchorEl(null)}
				active={codeEditorLanguage}
				options={languages}
				handleOptionClick={handleClick}
			/>
		</div>
	);
};
