import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TeacherDirectory from './components/TeacherDirectory/TeacherDirectory';
<<<<<<< HEAD
import ErrorPage from './components/navbar/ErrorPage';\
=======
import ErrorPage from './components/navbar/ErrorPage';
import Homepage from './components/Homepage/Homepage';
>>>>>>> e4f197ad53000e06151bd3b0807683561d89e1cc

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
<<<<<<< HEAD
=======
        <Route path="dashboard" element={<Homepage />} />
>>>>>>> e4f197ad53000e06151bd3b0807683561d89e1cc
        <Route path="students" element={null} />
        <Route path="teachers" element={<TeacherDirectory />} />
        <Route path="classes" element={null} />
        <Route path="calendar" element={null} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();