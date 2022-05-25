import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDirectory from './components/StudentDirectory/StudentDirectory.js'
import TeacherDirectory from './components/TeacherDirectory/TeacherDirectory.js';
import ErrorPage from './components/navbar/ErrorPage';
import EventCalendar from './components/calendar/EventCalendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="students" element={<StudentDirectory />} />
        <Route path="teachers" element={<TeacherDirectory />} />
        <Route path="classes" element={null} />
        <Route path="calendar" element={<EventCalendar/>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
