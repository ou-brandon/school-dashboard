import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
console.log(firebaseConfig);
<<<<<<< HEAD
export default db;s
=======
export default db;
>>>>>>> e4f197ad53000e06151bd3b0807683561d89e1cc
