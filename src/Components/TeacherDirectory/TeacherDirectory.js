import React, { useEffect } from 'react';
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import TeacherList from './TeacherList';
import AddTeacher from './AddTeacher';
import './directory.css';
import db from '../../firebase.js'

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
        <div id='teacher-directory'>
            <AddTeacher teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>
            <TeacherList teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>
        </div>
        
    );
}

export default TeacherDirectory;
