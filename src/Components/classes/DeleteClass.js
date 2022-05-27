import './class.css';
import db from '../../firebase';
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Button, Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';

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

function DeleteClass(props) {
    const [open, setOpen] = useState(false);
    const [classDoc, setClassDoc] = useState();

    const handleOpen = () => {
        getDoc(doc(db, 'classes', props.class.id))
            .then((doc) => setClassDoc(doc));
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    function deleteClass() {
        console.log(props.id);
        deleteDoc(doc(db, "classes", props.class.id));
        props.updated(true);
        props.deleted();
    }

    return <div>
    	<Button fullWidth variant="contained" color="error" onClick={handleOpen}>Delete Class</Button>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                {classDoc ?
                    <>
                        <Typography variant="h5">Delete class <strong>{classDoc.data().name}</strong>?</Typography>
                        <Typography variant="body1">Click outside this box to cancel.</Typography>
                    </>
                : null}
                <Button fullWidth variant="contained" className="delBtn" onClick={deleteClass} color="error" sx={{ mt: 1 }}>Delete Class</Button>
            </Box>
        </Modal>
    </div>
}

export default DeleteClass;