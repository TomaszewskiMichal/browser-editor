import { useState } from 'react';
import { Typography } from '@mui/material';

import { Dialog } from '../../components';
import { AppBarActions } from './components/AppBarActions';

export const AppBar = () => {
	const [openDialog, setOpenDialog] = useState<boolean>(true);

	const handleClose = () => setOpenDialog(false);
	const handleOpenDialog = () => setOpenDialog(true);

	return (
		// <div className="opacity-25 hover:opacity-100">
		<div>
			<AppBarActions handleOpenDialog={handleOpenDialog} />
			<Dialog
				open={openDialog}
				handleClose={handleClose}
				title={'TODO INFO'}
				content={
					<>
						<Typography variant="h4">
							On this site you can write code using npm packages, Javascript or Typescript.
						</Typography>
						<br />
						<Typography variant="h4">Unfortunately you can't use LocaleStorage.</Typography>
					</>
				}
			/>
		</div>
	);
};
