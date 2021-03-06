import { FormControl, MenuItem, TextField, Button, Modal, Box } from "@mui/material";
import { useState } from 'react';
import { collection, getDocs, addDoc, doc } from 'firebase/firestore';
import db from '../../firebase.js';

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

const AddClass = props => {
	const [open, setOpen] = useState(false);
	const [teachers, setTeachers] = useState();

	const [className, setClassName] = useState();
	const [classRoom, setClassRoom] = useState();
	const [classTeacher, setClassTeacher] = useState("");

	const handleOpen = () => {
		setOpen(true);
		getDocs(collection(db, 'teachers'))
			.then((allDocs) => {
				let temp = [];
				allDocs.forEach((doc) => temp.push(doc));
				setTeachers(temp);
			})
	};
	const handleClose = () => setOpen(false);

	const handleName = event => setClassName(event.target.value);
	const handleRoom = event => setClassRoom(event.target.value);
	const handleTeacher = event => setClassTeacher(event.target.value);
	const handleSubmit = async event => {
		const docRef = await addDoc(collection(db, 'classes'), {
			name: className,
			room: classRoom,
			teacher: doc(db, classTeacher)
		});
		console.log('document written with id: ', docRef.id);
		setOpen(false);
		setClassTeacher("");
		props.onAdd(true);
	};

	return (
		<>
			<Button fullWidth variant="contained" onClick={handleOpen}>Add Class</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
				 	<FormControl fullWidth>
						<TextField
							required
							label="Class Name"
							id="className" 
							onChange={handleName} 
							variant="standard"
							sx={{ mb: 1 }}
						/>
						<TextField 
							required
							label="Room"
							id="classRoom"
							onChange={handleRoom} 
							variant="standard"
							sx={{ my: 1 }}
						/>
						{teachers ? 
						<TextField 
							select 
							id="classTeacher" 
							value={classTeacher} 
							label="Teacher" 
							onChange={handleTeacher}
							variant="standard"
							sx={{ my: 1 }}
						>
							{teachers.map((teacher) => {
								return (<MenuItem value={`teachers/${teacher.id}`} key={teacher.id}>
									{teacher.data().lastName + ', ' + teacher.data().firstName}
								</MenuItem>);
							}
							)}
						</TextField>
						: null}
						<Button fullWidth variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>Add Class</Button>
					</FormControl>
				</Box>
			</Modal>
		</>
	)
};

export default AddClass;