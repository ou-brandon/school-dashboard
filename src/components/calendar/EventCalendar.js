import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Event from "./Event";

function EventCalendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  const [date, setDate] = useState(new Date());

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const events = [];
    getDocs(collection(db, "events")).then((allEvents) => {
      allEvents.forEach((event) =>
        events.push({ id: event.id, ...event.data() })
      );
      console.log(dayjs(date).format("MM/DD/YY").toString());
      for (let i = 0; i < events.length; i++) {
        if (events[i].date !== dayjs(date).format("MM/DD/YY").toString()) {
          events.splice(i, 1);
          i--;
          console.log("We actually did something");
        }
      }
      setEvents(events);
    });
  }, [db]);

  function updateEvents(date) {
    setDate(date);
    const events = [];
    getDocs(collection(db, "events")).then((allEvents) => {
      allEvents.forEach((event) =>
        events.push({ id: event.id, ...event.data() })
      );
      console.log(dayjs(date).format("MM/DD/YY").toString());
      for (let i = 0; i < events.length; i++) {
        if (events[i].date !== dayjs(date).format("MM/DD/YY").toString()) {
          events.splice(i, 1);
          i--;
          console.log("We actually did something");
        }
      }
      setEvents(events);
    });
  }

  return (
    <div>
      <Calendar value={date} onClickDay={updateEvents} />
      <h1>{dayjs(date).format("MM/DD/YY").toString()}</h1>
      {events.map((event) => (
        <Event
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          updateEvents={updateEvents}
          badDate={date}
        />
      ))}
      <div>
        <button className="btnAdd" onClick={deleteHandler}>
          Add Event
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onClick={closeHandler}
          updateEvents={updateEvents}
          date={dayjs(date).format("MM/DD/YY").toString()}
          badDate={date}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </div>
  );
}

export default EventCalendar;
