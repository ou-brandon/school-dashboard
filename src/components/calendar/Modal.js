import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";

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
      <h3>Input Parameters</h3>
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
    </div>
  );
}

export default Modal;
