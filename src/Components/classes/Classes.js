import Typography from "@mui/material/Typography";
import { Grid, Box, Paper } from "@mui/material";
import { useState } from "react";

import ClassList from "./ClassList.js";
import StudentList from "./StudentList.js";
import ClassInfo from "./ClassInfo.js";
import AddClass from "./AddClass.js";
import DeleteClass from "./DeleteClass.js";
import AddStudents from "./AddStudents.js";
import DeleteStudent from "./DeleteStudent.js";

const Classes = (props) => {
  const [selectedClass, setSelectedClass] = useState();
  const [deletedClass, setDeletedClass] = useState();
  const [updateClass, setUpdatedClass] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState();
  const [changedStudent, setChangedStudent] = useState();

  return (
    <>
      <Typography variant="h4">Classes</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
		  <Grid item xs={2}></Grid>
          <Grid item xs={4}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
				  <Paper elevation={4}>
					<ClassList update={updateClass} setUpdate={setUpdatedClass} setDelete={setDeletedClass} setClass={setSelectedClass} />
				  </Paper>
				</Grid>
				<Grid item xs={12}>
				  <AddClass onAdd={setUpdatedClass} />
				</Grid>
			</Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={4}>
                  {selectedClass ? <ClassInfo info={selectedClass} /> : null}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={4}>
                  {selectedClass ? <StudentList info={selectedClass} changedStudent={changedStudent} setStudent={setSelectedStudent} /> : null}
                </Paper>
              </Grid>
			  <Grid item xs={12}>
				{selectedClass ? <AddStudents info={selectedClass} onChange={setChangedStudent} /> : null}
			  </Grid>
			  <Grid item xs={12}>
				{selectedStudent ? <DeleteStudent studentInfo={selectedStudent} classInfo={selectedClass} onChange={setChangedStudent} /> : null}
			  </Grid>
              <Grid item xs={12}>
                {selectedClass ? <DeleteClass updated={setUpdatedClass} deleted={setSelectedClass} id={deletedClass}/> : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Classes;
