import { useContext, useState, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

import { AppContext, AppCodeEditorEnum } from '../../../app';
import { Button, Menu } from '../../../components';
import { Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField } from '@mui/material';

const languages = [AppCodeEditorEnum.JS, AppCodeEditorEnum.TS];

interface AppBarActionsProps {
	handleOpenDialog: () => void;
}

export const AppBarActions = ({ handleOpenDialog }: AppBarActionsProps) => {
	const anchorRef = useRef(null);
	const { codeEditorLanguage, setLanguage, isReactEnabled, setIsReactEnabled, debounceTime, setDebounceTime } =
		useContext(AppContext);

	return (
		<div className="absolute top-0 right-2 cursor-pointer z-10 opacity-25 transform transition duration-500 hover:opacity-100">
			<Menu
				controlComponent={(setAnchor) => <SettingsIcon onClick={(e) => setAnchor(e.currentTarget)} ref={anchorRef} />}
			>
				{(setAnchor) => (
					<div className="flex flex-col items-center">
						<FormControl>
							<FormLabel sx={{ pl: 0.5 }}>Code editor language</FormLabel>
							<Divider />
							<RadioGroup
								aria-label="Choose language"
								value={codeEditorLanguage}
								onChange={(e) => {
									if (setLanguage && e?.target?.value) {
										const lang = languages.find((language) => language === e.target.value);
										if (!lang) {
											return;
										}
										setLanguage(lang);
									}
								}}
							>
								{languages.map((language) => (
									<FormControlLabel
										key={language}
										value={language}
										control={<Radio aria-label={`${language} language`} />}
										label={language}
									/>
								))}
							</RadioGroup>
							<FormLabel sx={{ pl: 0.5 }}>Enable React by default</FormLabel>
							<Divider />
							<FormControlLabel
								label="Use React"
								checked={isReactEnabled}
								onChange={() => {
									if (setIsReactEnabled) {
										setIsReactEnabled(!isReactEnabled);
									}
								}}
								control={<Switch aria-label={isReactEnabled ? 'Disable default React' : 'Enable default React'} />}
							/>
							<FormLabel sx={{ pl: 0.5 }}>Declare time to wait before bundling code</FormLabel>
							<Divider />
							<FormControlLabel
								sx={{ p: 1 }}
								label="milliseconds"
								value={debounceTime}
								onChange={(e: any) => {
									if (setDebounceTime) {
										setDebounceTime(e.target.value);
									}
								}}
								control={
									<TextField
										sx={{ width: '50%', mr: 1 }}
										inputProps={{ sx: { p: 1 } }}
										aria-label="Declare time to wait before bundling code"
										type="number"
									/>
								}
							/>
						</FormControl>
						<Divider sx={{ width: '100%' }} />
						<Button className="w-1/4" onClick={() => setAnchor(null)}>
							Apply
						</Button>
					</div>
				)}
			</Menu>
			<HelpIcon onClick={handleOpenDialog} />
		</div>
	);
};
