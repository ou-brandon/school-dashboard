import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import ClassList from './ClassList.js';
import StudentList from './StudentList.js';
import InstructorInfo from './InstructorInfo.js';

const Classes = props => {
	const [selectedClass, setSelectedClass] = useState();

	return (
		<>
			<Typography variant="h4">Classes</Typography>
			<Grid container spacing={2}>
			 	<Grid item xs={2}>
				 	<ClassList setClass={setSelectedClass} />
				</Grid>
				<Grid item xs={2}>
					{selectedClass ? <InstructorInfo info={selectedClass} /> : null}
					{selectedClass ? <StudentList info={selectedClass} /> : null}
				</Grid>
			</Grid>
		</>
	);
};

export default Classes;