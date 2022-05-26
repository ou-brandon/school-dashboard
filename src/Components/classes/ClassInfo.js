import { Typography } from "@mui/material";
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';

const ClassInfo = props => {
	const [teacher, setTeacher] = useState();
	useEffect(() => {
		getDoc(props.info.data().teacher)
			.then((doc) => {
				setTeacher(doc.data());	
				console.log(doc.data());
			});
	}, [props.info]);

	let teacherDisplay;
	if (teacher) {
		teacherDisplay = <Typography variant="h6">Taught by <strong>{teacher.lastName}, {teacher.firstName}</strong></Typography>;
	}

	let roomDisplay = <Typography variant="h6">Taught in <strong>{props.info.data().room}</strong></Typography>

	return (
		<>
			{teacherDisplay}
			{roomDisplay}
		</>
	);
};

export default ClassInfo;