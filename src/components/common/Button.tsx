import { Button as MuiButton, CircularProgress } from '@mui/material';

interface ButtonProps {
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	children: string | React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	onClick: () => void;
	className?: string;
}

export const Button = ({ variant, color, children, onClick, loading, disabled, className }: ButtonProps) => {
	return (
		<MuiButton
			className={'!m-2' || className}
			variant={variant ?? 'contained'}
			color={color ?? 'primary'}
			onClick={onClick}
			disabled={disabled}
		>
			{loading ? (
				<div className="flex justify-center items-center">
					<CircularProgress />
				</div>
			) : (
				children
			)}
		</MuiButton>
	);
};
