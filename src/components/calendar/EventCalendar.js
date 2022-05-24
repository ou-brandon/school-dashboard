import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const onClickDay = () => {
    
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      
       {date.toString()}
      
    </div>
  );
}

export default EventCalendar;
