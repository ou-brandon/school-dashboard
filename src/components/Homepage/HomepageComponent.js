import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
const HomepageComponent = (props) => {
    return (
        
        <> 
            <Card style={{backgroundColor: "#79c1e2"}} sx={{boxShadow: 3, ':hover': {boxShadow: 9}}}>
                <CardActionArea component={Link} to={props.link}>
                    <Box>
                        <Typography variant='h5'>{props.title}</Typography>
                        {props.icon}
                    </Box>
                    
                    <CardContent>
                        <Typography variant='body'>{props.description}</Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </>
    );

    
}

export default HomepageComponent;