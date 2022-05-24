import React from 'react'
import { Box, Typography, Card, Button } from '@mui/material';
import db from '../../firebase.js';
import { deleteDoc } from 'firebase/firestore';

const TeacherElement = (props) => {
    const handleEdit = async () => {

    }

    const handleDelete = async () => {
        const delRef = await db.collection('teachers').where('id', '==', props.id).get();
        delRef.forEach((element) => {
            element.ref.delete();
        })
        props.fetchTeachers();
    }

    return (
        <Card variant='outlined' sx={{margin: '10px', padding: '10px', boxShadow: 3, ':hover': {boxShadow: 13}}}>
            <Typography variant='h6'>{props.firstName + " " + props.lastName}</Typography>
            <Typography variant='subtitle2'>ID: {props.id}</Typography>
            <Box sx={{display: 'flex'}}>
                <Button sx={{width: '90%'}} variant='outlined' onClick={handleEdit}>Edit Teacher</Button>
                <Button variant='outlined' color='error' onClick={handleDelete}>Delete Teacher</Button>
            </Box>
            
        </Card>
    );
    

}

export default TeacherElement;