import React from "react";
import { useState, useEffect } from "react";

//stylesheet
import "../Header/Header.css";

const Header = () => {
    return (
        <div className="header-subcontainer">
            <div className="name-container">
                <div className="avatar-container">
                    <div className="avatar">A</div>
                </div>
                <h1 className="name">Anupama</h1>
            </div>
            <div className="pagename-container">
                <div className="pagename-subcontainer">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <div className="contact-section">
                        <a className="contact" href="mailto:anu.anupamacv@gmail.com?cc=email2@yourdomain.com&amp;subject=Portfolio Inquiry&amp;body=Hi%20Michael%2C%0A%0A%3CFill%20out%20the%20body%3E">Contact</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;