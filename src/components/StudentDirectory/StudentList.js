import React from 'react'
import { Box, Typography, List } from '@mui/material';
import StudentElement from './StudentElement';

const StudentList = (props) => {
    return (
        <div>
            <Box>
                <List>
                    {props.students.map((student) => (
                        <StudentElement dbID= {student.id} id={student.data().id} firstName={student.data().firstName} lastName={student.data().lastName} grade = {student.data().grade} fetchStudents={props.fetchStudents}/>
                    ))}
                </List>
            </Box>
        </div>    
    );
}

export default StudentList;