import './class.css';
import db from '../../firebase';
import { deleteDoc, doc } from "firebase/firestore";

function DeleteClass(props) {

    function deleteClass() {
        console.log(props.id);
        deleteDoc(doc(db, "classes", props.id));
        props.deleted();
    }
    

    return <div>
        <button className="delBtn" onClick={deleteClass} >Delete Class</button>
    </div>
}

export default DeleteClass;