import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { CardActionArea, CardContent, Typography } from '@mui/material';

const HomepageComponent = (props) => {
    return (
        
        <>
            <Card>
                <CardActionArea component={Link} to={props.link}>
                    <Typography variant='h5'>{props.title}</Typography>
                    <CardContent>
                        <Typography variant='h6'>{props.description}</Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </>
    );

    
}

export default HomepageComponent;