import { Typography, List as MuiList, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

type ListItem = {
	id?: string | number;
	icon?: React.ReactNode;
	value: string | React.ReactNode;
	onClick?: () => void;
};

interface ListProps {
	list: ListItem[];
}

export const List = ({ list }: ListProps) => {
	return (
		<MuiList>
			{list.map((item, index) => (
				<div
					className="flex items-center mb-4 last:mb-0"
					key={item.id ?? index}
					onClick={item.onClick}
					tabIndex={item.onClick ? 0 : -1}
				>
					{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
					<ListItemText>
						<Typography variant="h5">{item.value}</Typography>
					</ListItemText>
				</div>
			))}
		</MuiList>
	);
};
