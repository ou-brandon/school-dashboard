import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import HomepageComponent from "./HomepageComponent";
/*
import { Card } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
*/
import background from "./tj2.jpg";
//import styles from "./Homepage.css";
import "./Homepage.css";

// <img className="photo" src={img}></img>
const Homepage = (props) => {
  
  /*
  I love this use of const for storing long text. This makes your logic in the return very readable.
  */
  const studentDirectoryDescription =
    "Search for students using an ID, first name, or last name. Add, edit, or delete students";
  const teacherDirectoryDescription =
    "Search for teachers using an ID, first name, or last name. Add, edit, or delete teachers";
  const classesDescription =
    "View, add, edit, or delete classes";
  const calendarDescription = 
    "View or add events to the school calendar";
  return (
    <>
      <article
      className="article"
      style={{ backgroundImage: `url(${background})` }}
    >
      
    </article>
      <Box sx={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "1%" }}>
          <Grid container direction="row" sx={{ padding: 5 }} spacing={{ xs: 4, md: 4 }}>
            <Grid item xs={6}>
              <HomepageComponent
                link="/students"
                title="Student Directory"
                description={studentDirectoryDescription}
              />
            </Grid>
            <Grid item xs={6}>
              <HomepageComponent
                link="/teachers"
                title="Teacher Directory"
                description={teacherDirectoryDescription}
              />
            </Grid>
            <Grid item xs={6}>
              <HomepageComponent
                link="/classes"
                title="Classes"
                description={classesDescription}
              />
            </Grid>
            <Grid item xs={6}>
              <HomepageComponent
                link="/calendar"
                title="School Calendar"
                description={calendarDescription}
              />
            </Grid>
          </Grid>
      </Box>
    </>
  );
};

export default Homepage;
