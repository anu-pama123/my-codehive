import React from "react";

// CSS
import "../../Home/ProjectFDiscussionContacts/ProjectDiscussionContacts.css";

// icons
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAttachEmail } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import { Paper } from "@mui/material";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubInverted } from "react-icons/vsc";

const ProjectDiscussionContacts =  () => {
    return (
        <div className="project-discussion-contacts-container">
            <div className="project-discussion-title-container">
                <h1>Let's discuss your project</h1>
            </div>
            <div className="project-discussion-description-container">
                <p>I'd love to hear about your ideas and help turn them into reality.Let’s collaborate and bring your vision to life with clean, efficient, and user-friendly web solutions!</p>
            </div>
            <div className="project-discussion-contacts">
                <Paper>
                    <div className="address-section">
                        <div className="address-icon-section">
                            <SlLocationPin className="address-icon"/>
                        </div>
                        <div className="address">
                            <h3>Address:</h3>
                            <p>Bangalore, 560075</p>
                        </div>
                    </div>
                </Paper>
                <div className="email-section-container">
                    <div className="email-section">
                        <div className="email-icon-section">
                            <MdOutlineAttachEmail className="email-icon"/>
                        </div>
                        <div>
                            <h3>My Email:</h3>
                            <p className="email">anu.anupamacv@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="phone-section-container">
                    <div className="phone-section">
                        <div className="phone-icon-section">
                            <VscCallIncoming className="phone-icon" />
                        </div>
                        <div>
                            <h3>Call Me Now:</h3>
                            <p className="phone-number">8086127102</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media-icons-container">
                <div className="linkedin-section">
                    <PiLinkedinLogo className="linkedin-icon"/>
                </div>
                <div>
                    <VscGithubInverted />
                </div>
            </div>
        </div>
    )
}

export default ProjectDiscussionContacts;