import React, { useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import './student_dir.css';
import db from '../../firebase.js'

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
        <div id='student-directory'>
            <AddStudent students={students} setStudents={setStudents} fetchStudents={fetchStudents}/>
            <StudentList students={students} setStudents={setStudents} fetchStudents={fetchStudents}/>
        </div>
        
    );
}

export default StudentDirectory;