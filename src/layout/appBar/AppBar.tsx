import { useState } from 'react';
import { Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { Dialog, List } from '../../components';
import { AppBarActions } from './components/AppBarActions';

const modalList = [
	{
		icon: <ArrowRightIcon sx={{ fontSize: 35 }} />,
		id: 1,
		value: ' Write Javascript or Typescript code',
	},
	{
		icon: <ArrowRightIcon sx={{ fontSize: 35 }} />,
		id: 2,
		value: 'Import npm packages',
	},
	{
		icon: <ArrowRightIcon sx={{ fontSize: 35 }} />,
		id: 3,
		value: 'Import some CSS styles like bulma',
	},
];

export const AppBar = () => {
	const [openDialog, setOpenDialog] = useState<boolean>(true);

	const handleClose = () => setOpenDialog(false);
	const handleOpenDialog = () => setOpenDialog(true);

	return (
		<div>
			<AppBarActions handleOpenDialog={handleOpenDialog} />
			<Dialog
				open={openDialog}
				handleClose={handleClose}
				title={'Welcome to Browser Code Editor'}
				content={
					<>
						<Typography variant="h4">
							{'On this site you can:'}
							<List list={modalList} />
						</Typography>
						<div className="mt-8">
							<Typography variant="h5">
								{`This editor support React out of the box. Just write component and call it with `}
								<b>{'show()'}</b>
								{` function. Unfortunately you can't use LocaleStorage.`}
							</Typography>
						</div>
					</>
				}
			/>
		</div>
	);
};
