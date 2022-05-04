import { useContext } from 'react';

import { MainContext } from '../../layout';

export const ErrorWindow = () => {
	const { bundled } = useContext(MainContext);
	return <div>{bundled}</div>;
};
