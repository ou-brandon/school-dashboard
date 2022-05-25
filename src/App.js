import './App.css';
<<<<<<< HEAD
import {initializeApp} from "firebase/app"
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";
import {useState, useEffect, useRef} from "react"
=======
import Navbar from './components/navbar/Navbar.js';
import { Outlet } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
>>>>>>> e4f197ad53000e06151bd3b0807683561d89e1cc

function App() {

  

  return (
<<<<<<< HEAD
    <div>
      <StudentDirectory/>
=======
    <div className="App">
      <Navbar />
      <Outlet />
>>>>>>> e4f197ad53000e06151bd3b0807683561d89e1cc
    </div>
  );
}

export default App;
