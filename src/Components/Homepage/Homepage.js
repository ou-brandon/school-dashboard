import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';

const Homepage = (props) => {
    return (
        <>
            <Box>
                <Typography variant='h6'>Welcome to Your Dashboard!</Typography>
                <Grid container spacing={{ xs:4, md:4}}>
                    <Grid item xs={6}>

                        <Card>
                            <CardActionArea component={Link} to='/students'>
                                <Typography variant='h4'>Student Directory</Typography>
                                <CardContent>
                                    <Typography variant='h6'>description</Typography>
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea component={Link} to='/teachers'>
                                <Typography variant='h4'>Teacher Directory</Typography>
                                <CardContent>
                                    <Typography variant='h6'>description</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea component={Link} to='/classes'>
                                <Typography variant='h4'>Classes</Typography>
                                <CardContent>
                                    <Typography variant='h6'>description</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                        <CardActionArea component={Link} to='/calendar'>
                                <Typography variant='h4'>Calendar</Typography>
                                <CardContent>
                                    <Typography variant='h6'>description</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
        
    );
}

export default Homepage;