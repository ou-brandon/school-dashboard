import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { Outlet } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {

  

  return (



    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
