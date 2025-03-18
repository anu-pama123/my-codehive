import React from "react";

// css
import "../AboutMe/AboutMe.css";

//data
import skills from "../../../Data/skills.json";

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <div className="about-me-description">
                <div className="aboutme-description-section">
                    <h1>What I do?</h1>
                    <p>I am a React Developer with a passion for building modern, scalable, and user-friendly web applications. Experienced in React.js, JavaScript, TypeScript, Redux, Tailwind CSS, and API integrations. Always eager to learn and implement new technologies to enhance user experiences.</p>
                    <button className="hello-button">Say Hello</button>
                </div>
            </div>
            <div className="skills-description-container">
                <div className="skills-description">
                    {skills.map((skill,id) => (
                        <div key={id} className="skills">
                            <span className="skill-name">
                                <div>
                                    <h3>{skill.name}</h3>
                                </div>
                            </span>
                            <span className="skill-description">
                                <p>{skill.description}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;