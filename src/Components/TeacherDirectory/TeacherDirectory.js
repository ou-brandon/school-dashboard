import React, { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import TeacherList from './TeacherList';
import AddTeacher from './AddTeacher';
import './directory.css';

const TeacherDirectory = (props) => {
    const [teachers, setTeachers] = useState([]);
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
        setTeachers(tchrs);
    }

    useEffect(()=>{
        fetchTeachers();
    }, [])
    return (
        <div id='teacher-directory'>
            <p>asdf</p>
            <AddTeacher teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>
            <TeacherList teachers={teachers} setTeachers={setTeachers} fetchTeachers={fetchTeachers}/>
        </div>
        
    );
}

export default TeacherDirectory;