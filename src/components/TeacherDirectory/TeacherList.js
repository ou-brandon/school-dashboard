import React from 'react'
import { Box, List } from '@mui/material';
import TeacherElement from './TeacherElement';

const TeacherList = (props) => {
   
    return (
        
        <div>
            <Box>
                <List>
                    {props.teachers.map((teacher) => (
                        <TeacherElement dbID= {teacher.id} id={teacher.data().id} firstName={teacher.data().firstName} lastName={teacher.data().lastName} fetchTeachers={props.fetchTeachers}/>
                    ))}
                </List>
            </Box>
        </div>    
    );

}

export default TeacherList;