import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import HomepageComponent from './HomepageComponent';
import { Card } from '@mui/material';
import ListIcon from '@mui/icons-material/List'
import SchoolIcon from '@mui/icons-material/School'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Homepage = (props) => {
    const studentDirectoryDescription = 'Search for students using an ID, first name, or last name. Add, edit, or delete students';
    const teacherDirectoryDescription = 'Search for teachers using an ID, first name, or last name. Add, edit, or delete teachers';
    const classesDescription = 'Search for classes ____. Add, edit, or delete classes';
    const calendarDescription = 'View or add events to the school calendar ';
    return (
        <>
            <Box sx={{paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%'}}>
                <Card sx={{boxShadow: 3}}>
                    <Typography variant='h4'>Welcome to Your Dashboard!</Typography>
                    <Grid container sx={{padding: 5}} spacing={{ xs:4, md:4}}>
                        <Grid item xs={6}>
                            <HomepageComponent link='/students' title='Student Directory' description={studentDirectoryDescription}/>                       
                        </Grid>
                        <Grid item xs={6}>
                            <HomepageComponent link='/teachers' title='Teacher Directory' description={teacherDirectoryDescription} /> 
                        </Grid>
                        <Grid item xs={6}>
                            <HomepageComponent link='/classes' title='Classes' description={classesDescription}/> 
                        </Grid>
                        <Grid item xs={6}>
                            <HomepageComponent link='/calendar' title='School Calendar' description={calendarDescription}/> 
                        </Grid>
                    </Grid>
                </Card>
                
            </Box>
        </>
        
    );
}

export default Homepage;