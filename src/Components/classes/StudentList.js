import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { getDocs, getDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase.js';

const StudentList = props => {
	const [studentsData, setStudentsData] = useState();
	useEffect(() => {
		getDocs(collection(db, `classes/${props.info.id}/roster`))
			.then((allDocs) => {
				setStudentsData(allDocs);
				console.log(allDocs);
			});
	}, [props.info, props.changedStudent])

	let students = [];
	if (studentsData)
		studentsData.forEach((doc) => {
			students.push(<StudentButton info={doc} key={doc.id} setStudent={props.setStudent} />);
			console.log(doc.data());
		}
	);

	return (
		<>
			<List>
				{students}
			</List>
		</>
	)
};

const StudentButton = props => {
	const [student, setStudent] = useState();
	useEffect(() => {
		getDoc(props.info.data().student)
			.then((doc) => setStudent(doc))
	}, [props.info])
	
	let firstName, lastName = null;
	if (student) {
		firstName = student.data().firstName;
		lastName = student.data().lastName;
	}

	const studentClicked = (event) => props.setStudent(props.info);
	
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={studentClicked}>
				{student ? <ListItemText primary={`${lastName}, ${firstName}`} /> : null}
			</ListItemButton>			
		</ListItem>
	)
};

export default StudentList;