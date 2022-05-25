import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import HomepageComponent from './HomepageComponent';

const Homepage = (props) => {
    return (
        <>
            <Box sx={{paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%'}}>
                <Typography variant='h4'>Welcome to Your Dashboard!</Typography>
                <br></br>
                <Grid container spacing={{ xs:4, md:4}}>
                    <Grid item xs={6}>
                        <HomepageComponent link='/students' title='Student Directory' description='description'/>                       
                    </Grid>
                    <Grid item xs={6}>
                        <HomepageComponent link='/teachers' title='Teacher Directory' description='description'/> 
                    </Grid>
                    <Grid item xs={6}>
                        <HomepageComponent link='/classes' title='Classes' description='description'/> 
                    </Grid>
                    <Grid item xs={6}>
                        <HomepageComponent link='/calendar' title='School Calendar' description='description'/> 
                    </Grid>
                </Grid>
            </Box>
        </>
        
    );
}

export default Homepage;