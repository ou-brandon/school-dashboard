import './App.css';
import {initializeApp} from "firebase/app"
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";
import {useState, useEffect, useRef} from "react"

function App() {

  

  return (
    <div>
      <StudentDirectory/>
    </div>
  );
}

export default App;
