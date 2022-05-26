import Typography from "@mui/material/Typography";
import { Grid, Box, Paper } from "@mui/material";
import { useState } from "react";

import ClassList from "./ClassList.js";
import StudentList from "./StudentList.js";
import ClassInfo from "./ClassInfo.js";
import AddClass from "./AddClass.js";
import DeleteClass from "./DeleteClass.js";
import AddStudents from "./AddStudents.js";

const Classes = (props) => {
  const [selectedClass, setSelectedClass] = useState();
  const [deletedClass, setDeletedClass] = useState();
  const [updateClass, setUpdatedClass] = useState(false);

  const [addedStudent, setAddedStudent] = useState();

  return (
    <>
      <Typography variant="h4">Classes</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={4}>
              <ClassList update={updateClass} setUpdate={setUpdatedClass} setDelete={setDeletedClass} setClass={setSelectedClass} />
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
                  {selectedClass ? <StudentList info={selectedClass} addedStudent={addedStudent} /> : null}
                </Paper>
              </Grid>
			  <Grid item xs={12}>
				{selectedClass ? <AddStudents info={selectedClass} onAdd={setAddedStudent} /> : null}
			  </Grid>
              <Grid item xs={12}>
                {selectedClass ? <DeleteClass updated={setUpdatedClass} deleted={setSelectedClass} id={deletedClass}/> : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
			<Paper elevation={4}>
			  <AddClass onAdd={setUpdatedClass} />
			</Paper>
		  </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Classes;
