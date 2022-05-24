import React from 'react'
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { collection, getDocs} from "firebase/firestore";
//import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography, List, Card } from '@mui/material';

const TeacherList = (props) => {
    //const [teachers, setTeachers] = useState([]);
    
    return (
    
        <div>
            <Box sx={{paddingLeft: '35%', paddingRight: '35%'}}>
                <Typography variant='h4'>Teachers</Typography>
                <List>
                    {props.teachers.map((teacher) => (
                        <Card variant='outlined' sx={{margin: '10px', padding: '10px', boxShadow: 3, ':hover': {boxShadow: 13}}}>
                            <Typography variant='h6'>{teacher.data().firstName + " " + teacher.data().lastName}</Typography>
                            <Typography variant='subtitle2'>ID: {teacher.data().id}</Typography>
                        </Card>
                    ))}
                </List>
            </Box>
        </div>    
    );

}

export default TeacherList;