import React from "react";
import "./Skills.css";

const skills = () => {

    const programmingLanguages = ["C++", "Python", "JavaScript", "Node.js", "React.js", "Flutter", "Dart"];
    const versionControlAndDevTools = ["Git", "GitHub", "GitLab", "Agile Methodologies", "DevOps", "CI/CD", "Docker", "Kubernetes"];
    const cloudPlatforms = ["AWS", "IBM Cloud"];
    const webDevelopment = ["HTML", "CSS", "Tailwind", "Bootstrap", "RESTful APIs", "Lucid", "Figma"];
    const database = ["SQL", "MongoDB"];
    const operatingSystems = ["Windows", "Linux (Ubuntu)", "MacOS"];
    const scripting = ["Bash Scripting", "Shell Scripting (including sh, csh, zsh)", "PowerShell"];
    const microsoftOffice = ["Word", "Excel", "PowerPoint"];

    return (
        <div id="skills" className="skills">
            <h1 className="skills-heading">Skills</h1>

            <div className="skills-category">
                <h2>Programming Languages</h2>
                <div className="skills-list">
                    {programmingLanguages.map((language, index) => (
                        <div className="skill-item" key={index}>{language}</div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Version Control & Development Tools</h2>
                <div className="skills-list">
                {versionControlAndDevTools.map((tool, index) => (
                    <div className="skill-item" key={index}>{tool}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Cloud Platforms</h2>
                <div className="skills-list">
                {cloudPlatforms.map((platform, index) => (
                    <div className="skill-item" key={index}>{platform}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Web Development</h2>
                <div className="skills-list">
                {webDevelopment.map((tech, index) => (
                    <div className="skill-item" key={index}>{tech}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Database</h2>
                <div className="skills-list">
                {database.map((db, index) => (
                    <div className="skill-item" key={index}>{db}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Operating Systems</h2>
                <div className="skills-list">
                {operatingSystems.map((os, index) => (
                    <div className="skill-item" key={index}>{os}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Scripting</h2>
                <div className="skills-list">
                {scripting.map((script, index) => (
                    <div className="skill-item" key={index}>{script}</div>
                ))}
                </div>
            </div>

            <div className="skills-category">
                <h2>Microsoft Office</h2>
                <div className="skills-list">
                {microsoftOffice.map((app, index) => (
                    <div className="skill-item" key={index}>{app}</div>
                ))}
                </div>
            </div>
        </div>

    );
};

export default skills;