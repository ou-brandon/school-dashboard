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
		teacherDisplay = <Typography variant="body1">Taught by {teacher.lastName}, {teacher.firstName}</Typography>;
	}

	return (
		<>
			{teacherDisplay}
		</>
	);
};

export default ClassInfo;