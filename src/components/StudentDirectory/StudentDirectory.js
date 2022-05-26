import React, { useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import './student_dir.css';
import db from '../../firebase.js'
import StudentSearch from './StudentSearch';
import { Box, Drawer, Typography, Card} from '@mui/material'

const StudentDirectory = (props) => {
    const [students, setStudents] = useState([]);
    const fetchStudents = async () => {

        const stnts = [];
        const querySnapshot = await getDocs(collection(db, 'students'))
        querySnapshot.forEach((student) => {
            stnts.push(student);
            console.log(student.id + " " + student.data().id + " " + student.data().firstName + " " + student.data().lastName + " " + student.data().grade);
          });
        setStudents(stnts);
    }

    useEffect(()=>{
        fetchStudents();
    }, [])
    return (
        <>
            <div id='add-student-sidebar'>
                <Box>
                    <Drawer PaperProps={{sx: {width: '15%', padding: '1%', paddingTop: '10%'}}} 
                        elevation={16} anchor='left' open={true} variant='persistent'>
                            <Typography color='secondary' variant='h6'>Add a Student</Typography>
                            <AddStudent students={students} setStudents={setStudents} fetchStudents={fetchStudents}/>              
                    </Drawer>
                </Box>

            </div>
            <div id='student-directory'>
                <Box sx={{marginLeft: '35%', marginRight: '35%', marginTop: '1%', marginBottom: '1%'}} >
                    <Card>
                        <Typography sx={{paddingTop: '10px'}} variant='h4'>Students</Typography>
                    </Card>
                    
                    <StudentSearch students={students} setStudents={setStudents} fetchStudents={fetchStudents} />
                    <StudentList students={students} setStudents={setStudents} fetchStudents={fetchStudents}/>
                </Box>
            </div>
                
        </>
        
        
    );
}

export default StudentDirectory;