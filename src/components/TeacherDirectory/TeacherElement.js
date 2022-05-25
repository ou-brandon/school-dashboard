import React from 'react'
import { Box, Typography, Card, Button } from '@mui/material';
import db from '../../firebase.js';
import { deleteDoc, setDoc, doc } from 'firebase/firestore';
import { Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useRef } from 'react';

const TeacherElement = (props) => {

    const idRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const [open, setOpen] = useState(false);
    const handleEdit = async () => {
        setOpen(true);
    }

    const handleDelete = async () => {
        await deleteDoc(doc(db, 'teachers', props.dbID));
        props.fetchTeachers();
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = async () => {
        setDoc(doc(db, "teachers", props.dbID), {
            id: idRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        })
        props.fetchTeachers();
        handleClose();
    }


    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit {props.firstName} {props.lastName}'s Information</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" label='First Name' defaultValue={props.firstName} inputRef={firstNameRef}/>
                    <TextField margin="dense" label='Last Name' defaultValue={props.lastName} inputRef={lastNameRef}/>
                    <TextField margin="dense" label='ID' defaultValue={props.id} inputRef={idRef}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>x
            </Dialog>
            <Card variant='outlined' sx={{margin: '10px', padding: '10px', boxShadow: 3, ':hover': {boxShadow: 13}}}>
                <Typography variant='h6'>{props.firstName + " " + props.lastName}</Typography>
                <Typography variant='subtitle2'>ID: {props.id}</Typography>
                <Box sx={{display: 'flex'}}>
                    <Button sx={{width: '90%'}} variant='outlined' onClick={handleEdit}>Edit Teacher</Button>
                    <Button variant='outlined' color='error' onClick={handleDelete}>Delete Teacher</Button>
                </Box>
            
            </Card>
        </>
        
    );
    

}

export default TeacherElement;