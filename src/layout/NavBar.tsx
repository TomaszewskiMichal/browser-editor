import { useContext, useState, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

import { AppContext } from '../AppContextProvider';
import { AppProviderLangEnum } from '../models';
import { Menu } from '../components';

const languages = [AppProviderLangEnum.JS, AppProviderLangEnum.TS];

export const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const anchorRef = useRef(null);
	const { language, setLanguage, rawCode } = useContext(AppContext);

	const handleClick = (option: string) => {
		setLanguage(option);
		setAnchorEl(null);
	};
	return rawCode ? (
		<div style={{ position: 'absolute', top: 0, right: 5, cursor: 'pointer' }}>
			<SettingsIcon onClick={() => setAnchorEl(anchorRef.current)} ref={anchorRef} />
			<Menu
				anchor={anchorEl}
				onClose={() => setAnchorEl(null)}
				active={language}
				options={languages}
				handleOptionClick={handleClick}
			/>
		</div>
	) : (
		<div />
	);
};
