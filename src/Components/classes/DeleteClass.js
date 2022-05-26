import './class.css';
import db from '../../firebase';
import { deleteDoc, doc } from "firebase/firestore";
import { Button } from '@mui/material';

function DeleteClass(props) {

    function deleteClass() {
        console.log(props.id);
        deleteDoc(doc(db, "classes", props.id));
        props.updated(true);
        props.deleted();
    }
    

    return <div>
        <Button fullWidth variant="contained" className="delBtn" onClick={deleteClass} color="error">Delete Class</Button>
    </div>
}

export default DeleteClass;