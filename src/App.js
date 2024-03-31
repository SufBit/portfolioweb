import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'; // Importing BrowserRouter, Switch, and Route
import Navbar from './Components/Navbar'; // Importing the Navbar component
import OvalPicture from './Components/Oval'; // Importing the Oval component
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Router>
        <div>
          <Navbar /> {/* Including the Navbar component */}
          <AboutMe />
        </div>
      </Router>
    </div>
  );
}

export default App;
