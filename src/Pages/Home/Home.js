import React from "react";

//stylesheet
import "../Home/Home.css";
import { FaArrowDownLong } from "react-icons/fa6";

//assets
import userImage from "../../Assets/Images/frontend1.png";

const Home = () => {
    return (
        <div>
            <div className="home-page-container1">
                <div className="home-page-section1">
                    <div className="about-section-container">
                        <div className="about-section-title">
                            <h1>Hello, I'm</h1>
                            <h1>Anupama CV</h1>
                        </div>
                        <div className="about-section-descrption">
                            <p className="description">I'm a Frontend Developer based in Bangalore, India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                        </div>
                        <div className="home-page-section3">
                        <button className="download-section-container">
                            <div className="download-section">
                                <h3>Download CV</h3>
                                <FaArrowDownLong className="download-icon"/>
                            </div>
                        </button>                
                </div>
                    </div>
                    <div className="about-section-image-container">
                        <img className="user-image" src={userImage}></img>
                    </div>
                </div> 
                <div className="home-page-section2">
                    <div className="home-page-section2-container">
                        <div className="home-page-section2-subsection">
                            <div className="experiance-section"> 
                                <div className="">4 Y</div>
                                <div>Experiance</div>
                            </div>
                        </div>
                        <div className="home-page-section2-subsection">
                            <div className="project-section">
                                <div>30 +</div>
                                <div>Project Completed</div>
                            </div>
                        </div>
                        <div className="home-page-section2-subsection">
                            <div className="client-section">
                                <div>5</div>
                                <div>Happy Client</div>
                            </div>
                        </div>
                    </div>
                </div>    

            </div>
            <div className="home-page-container2">
                <div className="recent-projects-section">
                    <div className="recent-projects-title">Recent Projects</div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;