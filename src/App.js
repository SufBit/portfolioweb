import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'; // Importing BrowserRouter, Switch, and Route
import Navbar from './Components/Navbar'; // Importing the Navbar component
import AboutMe from './Components/AboutMe';
import TypingText from './Components/TypingText';
import Projects from './Components/projects';


function App() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Router>
        <div>
          <Navbar /> {/* Including the Navbar component */}
          <div style={{ marginLeft: '20px',height:'auto',}}>
            <TypingText />
            <AboutMe />
          </div>
          <Projects />
        </div>
      </Router>
    </div>
  );
}

export default App;
