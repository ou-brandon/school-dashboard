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
				});
	}, []);
		
	if (classEntries)
		classEntries.forEach((doc) => {
			console.log(doc.data());
			classes.push(<ClassButton info={doc} key={doc.id} />);
		});

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
	return (
		<ListItem disablePadding>
			<ListItemButton>
				<ListItemText primary={name} />
			</ListItemButton>
		</ListItem>
	);
};

export default ClassList;