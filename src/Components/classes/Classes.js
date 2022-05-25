import Typography from '@mui/material/Typography';
import { Grid, Box, Paper } from '@mui/material';
import { useState } from 'react';

import ClassList from './ClassList.js';
import StudentList from './StudentList.js';
import ClassInfo from './ClassInfo.js';

const Classes = props => {
	const [selectedClass, setSelectedClass] = useState();

	return (
		<>
			<Typography variant="h4">Classes</Typography>
			<Box sx={{flexGrow: 1}}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
					 	<Paper elevation={4}>
							<ClassList setClass={setSelectedClass} />
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Paper elevation={4}>
									{selectedClass ? <ClassInfo info={selectedClass} /> : null}
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper elevation={4}>
									{selectedClass ? <StudentList info={selectedClass} /> : null}
								</Paper>	
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Classes;