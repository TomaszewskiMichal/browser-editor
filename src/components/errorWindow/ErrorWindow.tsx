import { useContext } from 'react';

import { AppContext } from '../../AppContextProvider';

export const ErrorWindow = () => {
	const {
		code: { bundled },
	} = useContext(AppContext);
	return <div>{bundled}</div>;
};
