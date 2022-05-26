import "react-calendar/dist/Calendar.css";
import { Card } from "@mui/material";
function EmptyEvent(props) {
  return (
    <Card
      sx={{
        minWidth: "300px",
        margin: "5px",
        padding: "15px",
        ":hover": { boxShadow: 9 },
      }}
    >
      <h3>No Events Planned for Today</h3>
      <p>Click the "Add Event" button underneath the calendar to add events</p>
    </Card>
  );
}

export default EmptyEvent;
