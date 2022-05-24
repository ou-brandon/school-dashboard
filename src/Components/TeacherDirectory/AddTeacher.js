import React from "react";
import { Button } from "@mui/material";
import { useRef } from "react";
import { TextField } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc} from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const AddTeacher = (props) => {
    
    const newTeacherID = useRef();
    const newTeacherFirstName = useRef();
    const newTeacherLastName = useRef();

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId
    };
      // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchTeachers = async () => {
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
        };
          // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const tchrs = [];
        const querySnapshot = await getDocs(collection(db, 'teachers'))
        querySnapshot.forEach((teacher) => {
            tchrs.push(teacher);
            console.log(teacher.id + " " + teacher.data().id + " " + teacher.data().firstName + " " + teacher.data().lastName);
          });
        props.setTeachers(tchrs);
    }
    const handleSubmit = async () => {
        const docRef = await addDoc(collection(db, 'teachers'), {
            id: newTeacherID.current.value,
            firstName: newTeacherFirstName.current.value,
            lastName: newTeacherLastName.current.value
        });
        fetchTeachers();
        console.log(docRef.id)
        
    }
    
    return (
        <>
            <TextField label='First Name' inputRef={newTeacherFirstName}/>
            <TextField label='Last Name' inputRef={newTeacherLastName}/>
            <TextField label='Teacher ID' inputRef={newTeacherID}/>
            <br></br>
            <Button variant='contained' onClick={handleSubmit}>
                Add Teacher
            </Button>
        </>
        
    );
}

export default AddTeacher;