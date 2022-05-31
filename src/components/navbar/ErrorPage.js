import Typography from '@mui/material/Typography';

//If props don't get used, don't pass them in or include them in the function signature.
const ErrorPage = props => {
	return (
		<>
			<Typography variant="h4">error 404 :(</Typography>
			<Typography variant="body1">That page doesn't exist. Go back or hit one of the buttons above.</Typography>
		</>
	);
};

export default ErrorPage;
