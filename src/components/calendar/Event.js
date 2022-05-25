import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import EditModal from "./EditModal";
import Backdrop from "./Backdrop";

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
    <div>
      <h3>
        {props.title} <button onClick={deleteHandler}>Edit</button>
      </h3>
      <p>{props.description}</p>
      {modalIsOpen && (
        <EditModal
          onClick={closeHandler}
          id={props.id}
          badDate={props.badDate}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </div>
  );
}

export default Event;
