import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { Outlet, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {

  

  return (



    <div className="App">
      <Navbar />
      <Outlet />
      {useLocation().pathname == '/' && <Homepage />}
    </div>
  );
}

export default App;
