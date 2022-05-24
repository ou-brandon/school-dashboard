import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ClassList from './ClassList.js';

const Classes = props => {
	return (
		<>
			<Typography variant="h4">Classes</Typography>
			<Grid container spacing={2}>
			 	<Grid item xs={2}>
				 	<ClassList />
				</Grid>
			</Grid>
		</>
	);
};

export default Classes;