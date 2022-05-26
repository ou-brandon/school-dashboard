import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import EditModal from "./EditModal";
import Backdrop from "./Backdrop";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
function Event(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    props.updateEvents(props.badDate);
  }

  function closeHandler() {
    setModalIsOpen(false);
    props.updateEvents(props.badDate);
  }

  return (
    <Card sx={{minWidth:'300px', margin: '5px', padding: '15px', ':hover': {boxShadow: 9}}}>
      <h3>
        {props.title}
      </h3>
      <p>{props.description}</p>
      <Button variant='contained' onClick={deleteHandler}>Edit Event</Button>
      {modalIsOpen && (
        <EditModal
          onClick={closeHandler}
          id={props.id}
          badDate={props.badDate}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
      
    </Card>
  );
}

export default Event;
