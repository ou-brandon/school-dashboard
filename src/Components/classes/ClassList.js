import db from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";

const ClassList = (props) => {
  const [classEntries, setClassEntries] = useState();

  let classes = [];
  console.log("Right above useEffect");
  useEffect(() => {
    getDocs(collection(db, "classes")).then((allDocs) => {
      setClassEntries(allDocs);
      console.log("Reading from database: " + allDocs);
    });
  }, []);

  if (props.update) {
    getDocs(collection(db, "classes")).then((allDocs) => {
      setClassEntries(allDocs);
      console.log("Reading from database: " + allDocs);
    });
    classEntries.forEach((doc) =>
      classes.push(
        <ClassButton
          info={doc}
          key={doc.id}
          id={doc.id}
          setClass={props.setClass}
          setDelete={props.setDelete}
        />
      )
    );
	props.setUpdate(false);
  }

  if (classEntries)
    classEntries.forEach((doc) =>
      classes.push(
        <ClassButton
          info={doc}
          key={doc.id}
          id={doc.id}
          setClass={props.setClass}
          setDelete={props.setDelete}
        />
      )
    );

  return (
    <>
      <List>{classes}</List>
    </>
  );
};

const ClassButton = (props) => {
  const name = props.info.data().name;
  function classClicked() {
    props.setDelete(props.info);
    props.setClass(props.info);
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={classClicked}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default ClassList;
