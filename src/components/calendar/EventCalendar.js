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
import { Box, Typography, Card, Grid } from "@mui/material";
import background from "./img.jpg";
import "./calendar.css";
import EmptyEvent from "./EmptyEvent";

const EventCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  const [date, setDate] = useState(new Date());

  const [events, setEvents] = useState([]);

  const [nothing, setNothing] = useState(false);

  useEffect(() => {
    const events = [];
    getDocs(collection(db, "events")).then((allEvents) => {
      allEvents.forEach((event) =>
        events.push({ id: event.id, ...event.data() })
      );
      console.log(dayjs(date).format("MM/DD/YY").toString());
      for (let i = 0; i < events.length; i++) {
        if (events[i].date !== dayjs(date).format("MM/DD/YY").toString()) {
          setNothing(false);
          events.splice(i, 1);
          i--;
          console.log("We actually did something");
        }
      }
      if (events.length === 0) {
        setNothing(true);
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
          setNothing(false);
          events.splice(i, 1);
          i--;
          console.log("We actually did something");
        }
      }
      if (events.length === 0) {
        setNothing(true);
      }
      setEvents(events);
    });
  }

  return (
    <div>
      <div
        className="articles"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Card
          sx={{
            bgcolor: "lightskyblue",
            marginTop: "1%",
            marginLeft: "25%",
            marginRight: "25%",
            paddingBottom: "18%",
            boxShadow: 7,
          }}
        >
          <Typography sx={{paddingTop: "5px" }} variant="h3">Event Calendar</Typography>
          <Grid container spacing={-3}>
            <Grid item xs={5} marginTop="2.5rem" marginLeft="3rem">
              <Calendar
                sx={{ boxShadow: 3, height: "400px" }}
                value={date}
                onClickDay={updateEvents}
              />
              <button className="btnAdd" onClick={deleteHandler}>
                Add Event
              </button>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ justifyContent: "center", padding: "5px" }}>
                <h1>{dayjs(date).format("MM/DD/YY").toString()}</h1>
                {nothing && <EmptyEvent/>}
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
                {modalIsOpen && (
                  <Modal
                    onClick={closeHandler}
                    updateEvents={updateEvents}
                    date={dayjs(date).format("MM/DD/YY").toString()}
                    badDate={date}
                  />
                )}
                {modalIsOpen && <Backdrop onClick={closeHandler} />}
              </Box>
            </Grid>
          </Grid>
        </Card>
        </div>
    </div>
  );
};

export default EventCalendar;
