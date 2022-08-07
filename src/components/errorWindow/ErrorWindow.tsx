import { useContext } from 'react';
import { Typography } from '@mui/material';
import { MainContext } from '../../layout';

export const ErrorWindow = () => {
	const { errors } = useContext(MainContext);

	return (
		<div className="flex flex-col">
			{errors.map((error) => (
				<>
					<Typography variant="body1" sx={{ color: 'red' }}>
						{error.text}
					</Typography>
					<Typography variant="caption">{error.detail}</Typography>
				</>
			))}
		</div>
	);
};
