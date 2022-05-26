import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
function Modal(props) {
  function onCancal() {
    props.onClick();
  }

  const textFieldRefTitle = useRef(null);
  const textFieldRefDescription = useRef(null);

  const addEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      title: textFieldRefTitle.current.value,
      description: textFieldRefDescription.current.value,
      date: props.date,
    };
    addDoc(collection(db, "events"), newEvent);

    textFieldRefTitle.current.value = "";
    textFieldRefDescription.current.value = "";
    props.onClick();
    props.updateEvents(props.badDate);
  };

  return (
    <div className="modal">
      <Typography variant='h5'>Add a New Event</Typography>
      {/*
      <div>
        <form>
          <input type="text" ref={textFieldRefTitle} />
        </form>
        <form>
          <input type="text" ref={textFieldRefDescription} />
        </form>
      </div>
      <button className="btn btn--alt" onClick={onCancal}>
        Cancel
      </button>
      <button className="btn btn--altC" onClick={addEvent}>
        Confirm
      </button>
        */}
        <TextField sx={{margin:'10px'}} label='Event Title' inputRef={textFieldRefTitle} />
        <br></br>
        <TextField sx={{margin:'10px'}} label='Event Description' inputRef={textFieldRefDescription} />
        <br></br>
        <Button sx={{margin:'10px'}} variant='contained' onClick={onCancal}>
          Cancel
        </Button>
        <Button sx={{margin:'10px'}} variant='contained' color='success'onClick={addEvent}>
          Confirm
        </Button>
    </div>
  );
}

export default Modal;
