import db from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';

const ClassList = props => {
	const [classEntries, setClassEntries] = useState();

	let classes = [];
	useEffect(() => {
		getDocs(collection(db, 'classes'))
			.then((allDocs) => {
				setClassEntries(allDocs);
				console.log(allDocs);
				});
	}, []);
		
	if (classEntries)
		classEntries.forEach((doc) => 
			classes.push(<ClassButton info={doc} key={doc.id} id={doc.id} setClass={props.setClass} setDelete={props.setDelete}/>));

	return (
		<>
			<List>
				{classes}
			</List>
		</>
	);
};

const ClassButton = props => {
	const name = props.info.data().name;
	function classClicked() {
		props.setDelete(props.id);
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