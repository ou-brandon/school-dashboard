import Typography from '@mui/material/Typography';

const ErrorPage = props => {
	return (
		<>
			<Typography variant="h4">ERROR 404</Typography>
			<Typography variant="body">That page doesn't exist. Go back or hit one of the buttons above.</Typography>
		</>
	);
};

export default ErrorPage;