import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
        <h1>Projects</h1>
      <div className="project-box">
        <a href="https://github.com/SufBit/Sole-Revive" target="_blank" rel="noopener noreferrer">
          <img src="../portfolioweb/project1.png" alt="Project 1" className="project-image" />
        </a>
        <p>CRUD Full-Stack E-commerce Web App</p> {}
      </div>
      <div className="project-box">
        <a href="https://github.com/SufBit/Fossil" target="_blank" rel="noopener noreferrer">
          <img src="../portfolioweb/project2.png" alt="Project 2" className="project-image" />
        </a>
        <p>Mastodon Client</p> {/* Description for Project 2 */}
      </div>
      {/* Add more project boxes as needed */}
      <div className="project-box">
        <a href="https://sufbit.github.io/SketchSite/" target="_blank" rel="noopener noreferrer">
          <img src="../portfolioweb/sketch.png" alt="Project 3" className="project-image" />
        </a>
        <p>Sketch</p> {/* Description for Project 2 */}
      </div>
      <div className="project-box">
        <a href="https://notes-taker-orbx.onrender.com" target="_blank" rel="noopener noreferrer">
          <img src="../portfolioweb/NotesT.png" alt="Project 4" className="project-image" />
        </a>
        <p>Note-Take</p> {/* Description for Project 2 */}
      </div>   
    </div>
  );
};

export default Projects;

