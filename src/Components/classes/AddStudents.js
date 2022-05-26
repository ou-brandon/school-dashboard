import { Button, Modal, Box, Autocomplete, FormControl, TextField } from "@mui/material";
import { addDoc, doc, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { collection } from "firebase/firestore";
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

const AddStudents = props => {
	const [open, setOpen] = useState(false);
	const [students, setStudents] = useState();
	const [value, setValue] = useState(null);

	const handleOpen = () => {
		setOpen(true);
		getDocs(collection(db, 'students'))
			.then((allDocs) => {
				const studentList = [];
				allDocs.forEach((doc) => {
					const firstName = doc.data().firstName;
					const lastName = doc.data().lastName;
					const path = `students/${doc.id}`;
					studentList.push({
						name: `${lastName}, ${firstName}`,
						path: path
					});
				});
				setStudents(studentList);	
			});
	}
	const handleClose = () => setOpen(false);

	const handleSubmit = async event => {
		const docRef = await addDoc(collection(db, `classes/${props.info.id}/roster`), {
			student: doc(db, value.path),
			grade: 0
		});
		console.log('document written with id: ', docRef.id);
		setOpen(false);
		setValue(null);
		props.onAdd(docRef.id);
	};

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>Add Students</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
				 	<FormControl fullWidth>
					 	{students ? 
							<Autocomplete
								disablePortal
								options={students}
								getOptionLabel={(option) => option.name}
								value={value}
								onChange={(event, newValue) => setValue(newValue)}
								renderInput={(params) => <TextField {...params} label="Student" />}
							/>
						: null}
					</FormControl>
					<Button variant="contained" onClick={handleSubmit}>Add Student</Button>
				</Box>
			</Modal>
		</>
	)
};

export default AddStudents;