import db from "../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRef } from "react";
import { Typography } from "@mui/material";
import { TextField, Button } from "@mui/material";

/*
Consider destructuring props like:

const EditModal = ({onClick, badDate, id, etc.}) => {
        stuff
}

This makes it so that you don't have to type props.stuff every time. Improves readability.


Remove console logs.
Improve file formatting.
Remove commented out code.
Write functions as const = () => {}
I saw the above issues in multiple files. This feedback applies to those files as well.
*/

function EditModal(props) {
    const textFieldRefTitle = useRef(null);
    const textFieldRefDescription = useRef(null);

  // Remove a response

  function onDelete() {
    deleteDoc(doc(db, "events", props.id));
    props.onClick(props.badDate);
  }

  // Get the response

  getDoc(doc(db, "events", props.id)) // get the collection
    .then((event) => {
      console.log(event);
      console.log(event.data());
      textFieldRefTitle.current.value = event.data().title;
      textFieldRefDescription.current.value = event.data().description;
    });

  //Edit the response

  function editData() {
    updateDoc(doc(db, "events", props.id), {
      title: textFieldRefTitle.current.value,
      description: textFieldRefDescription.current.value,
    });
    props.onClick(props.badDate);
  }

  return (
    <div className="modal">
      <Typography variant='h5'>Edit/Remove Event</Typography>
      <TextField sx={{margin: '10px'}} label='Event Title' InputLabelProps={{shrink:true}} inputRef={textFieldRefTitle} />
        <br></br>
        <TextField sx={{margin: '10px'}} label='Event Description' InputLabelProps={{shrink:true}} inputRef={textFieldRefDescription} />
        <br></br>
        <Button sx={{margin:'10px'}} variant='contained' color='error' className="btn btn--alt" onClick={onDelete}>
          Delete
        </Button>
        <Button sx={{margin:'10px'}} variant='contained' color='success' className="btn btn--altC" onClick={editData}>
          Save Edits
        </Button>
      {/*
      <h3>Edit/Remove Event</h3>
      <div>
        <form>
          <input type="text" ref={textFieldRefTitle} />
        </form>
        <form>
          <input type="text" ref={textFieldRefDescription} />
        </form>
      </div>
      <button className="btn btn--alt" onClick={onDelete}>
        Remove
      </button>
      <button className="btn btn--altC" onClick={editData}>
        Confirm
      </button>
      */}
    </div>
  );
}

export default EditModal;
