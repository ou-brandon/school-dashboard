import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Event from "./Event";
import { Box, Typography, Card } from "@mui/material";


const EventCalendar = (props) => {
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
      <Card sx={{bgcolor:'lightskyblue', marginTop: '2%', marginLeft: '25%', marginRight: '25%', paddingBottom: '15%', boxShadow: 7}}>
        <Typography variant='h3'>Event Calendar</Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-around', padding:'25px'}}>
          <Box>
            <Calendar sx={{boxShadow: 3, height: '400px' }} value={date} onClickDay={updateEvents} />
          </Box>
          
          <div>
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
        </Box>
      </Card>
      
      
      </div>
      
  );
}

export default EventCalendar;
