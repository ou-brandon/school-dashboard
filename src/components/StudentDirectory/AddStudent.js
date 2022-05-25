import React from "react";
import { Button } from "@mui/material";
import { useRef } from "react";
import { TextField } from "@mui/material";
import { collection, addDoc} from 'firebase/firestore';
import db from "../../firebase.js"
import { getDocs } from "firebase/firestore";

const AddStudent = (props) => {
    const newStudentID = useRef();
    const newStudentFirstName = useRef();
    const newStudentLastName = useRef();
    const newStudentGrade = useRef();

    const fetchStudents = async () => {
        const stnts = [];
        const querySnapshot = await getDocs(collection(db, 'students'))
        querySnapshot.forEach((student) => {
            stnts.push(student);
            console.log(student.id + " " + student.data().id + " " + student.data().firstName + " " + student.data().lastName + " " + student.data().grade);
          });
        props.setStudents(stnts);
    }
    const handleSubmit = async () => {
        const docRef = await addDoc(collection(db, 'students'), {
            id: newStudentID.current.value,
            firstName: newStudentFirstName.current.value,
            lastName: newStudentLastName.current.value,
            grade: newStudentGrade.current.value
        });
        fetchStudents();
        console.log(docRef.id)
        
    }
    
    return (
        <>
            <TextField label='First Name' inputRef={newStudentFirstName}/>
            <TextField label='Last Name' inputRef={newStudentLastName}/>
            <TextField label='Student ID' inputRef={newStudentID}/>
            <TextField label='Grade' inputRef={newStudentGrade}/>
            <br></br>
            <Button variant='contained' onClick={handleSubmit}>
                Add Student
            </Button>
        </>
        
    );
}

export default AddStudent;