import React from 'react'
import { Box, Typography, List } from '@mui/material';
import TeacherElement from './TeacherElement';

const TeacherList = (props) => {
   
    return (
        
        <div>
            <Box sx={{paddingLeft: '35%', paddingRight: '35%'}}>
                <Typography variant='h4'>Teachers</Typography>
                <List>
                    {props.teachers.map((teacher) => (
                        <TeacherElement id={teacher.data().id} firstName={teacher.data().firstName} lastName={teacher.data().lastName} fetchTeachers={props.fetchTeachers}/>
                    ))}
                </List>
            </Box>
        </div>    
    );

}

export default TeacherList;