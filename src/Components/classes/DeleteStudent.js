import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from 'react';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import db from "../../firebase.js";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: '10px',
	p: 4,
};

const DeleteStudent = props => {
	const [open, setOpen] = useState(false);
	const [studentDoc, setStudentDoc] = useState();

	const handleOpen = () => {
		getDoc(doc(db, props.studentInfo.data().student.path))
			.then((doc) => setStudentDoc(doc));
		setOpen(true);
	}
	const handleClose = () => setOpen(false);

	const handleSubmit = event => {
		let path = `classes/${props.classInfo.id}/roster/${props.studentInfo.id}`
		props.onChange(""); // empty string to signify deletion
		deleteDoc(doc(db, path));
		setOpen(false);
	}

	let studentName = null;
	if (studentDoc)
		studentName = `${studentDoc.data().lastName}, ${studentDoc.data().firstName}`;

	return (
		<>
			<Button fullWidth variant="contained" color="error" onClick={handleOpen}>Delete Student</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
				{studentDoc ? 
					<>
						<Typography variant="h5">Remove <strong>{studentName}</strong> from the <strong>{props.classInfo.data().name}</strong> roster?</Typography>
						<Typography variant="body1">Click outside this box to cancel.</Typography>
					</>
				: null }
				<Button variant="contained" color="error" onClick={handleSubmit}>Delete Student</Button>
				</Box>
			</Modal>
		</>
	)
};

export default DeleteStudent;