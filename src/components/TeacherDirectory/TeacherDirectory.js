import React, { useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import TeacherList from './TeacherList';
import AddTeacher from './AddTeacher';

import db from '../../firebase.js'
import TeacherSearchBar from './TeacherSearchBar';
import { Drawer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Card, CardContent } from '@mui/material';

const TeacherDirectory = (props) => {
    const [teachers, setTeachers] = useState([]);
    const fetchTeachers = async () => {

        const tchrs = [];
        const querySnapshot = await getDocs(collection(db, 'teachers'))
        querySnapshot.forEach((teacher) => {
            tchrs.push(teacher);
            console.log(teacher.id + " " + teacher.data().id + " " + teacher.data().firstName + " " + teacher.data().lastName);
          });
        setTeachers(tchrs);
    }

    useEffect(()=>{
        fetchTeachers();
    }, [])
    return (
        <>
            
            <div id='add-teacher-sidebar'>
                <Box>
                    <Drawer PaperProps={{sx: {width: '15%', padding: '1%', paddingTop: '10%'}}} 
                        elevation={16} anchor='left' open={true} variant='persistent'>
                            <Typography color='secondary' variant='h6'>Add a Teacher</Typography>
                            <AddTeacher teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>              
                    </Drawer>
                </Box>
                
                    
            </div>
            <div id='teacher-directory'>
                <Box sx={{marginLeft: '35%', marginRight: '35%', marginTop: '1%', marginBottom: '1%'}} >
                    <Card sx={{marginBottom: '10px'}}>
                        <Typography sx={{paddingTop: '10px', paddingBottom: '10px'}} variant='h4'>Teachers</Typography>
                    </Card>
                    
                    <TeacherSearchBar teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers} />
                    <TeacherList teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>
                </Box>
                
            </div>
        </>
        
        
    );
}

export default TeacherDirectory;
