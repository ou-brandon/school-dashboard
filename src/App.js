import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { Outlet, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

/*
I would like to see functions written as an arrow function. 
This is best practice.

const App = (props if you have them ) => {
  return (<div>stuff</div>);
}
*/

function App() {

  //Your code should be as beautiful as it is functional.
  //Don't leave random spaces like this in your code.
  //In vscode, you can turn on formatting on save so this doesn't happen.

  return (



    <div className="App">
      <Navbar />
      <Outlet />
      {useLocation().pathname === '/' && <Homepage />}
    </div>
  );
}

export default App;
