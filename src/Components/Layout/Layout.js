import React, { act } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";

// stylesheet
import "../Layout/Layout.css";

const Layout = () => {
    const location = useLocation();
    const [actveLocation, setActiveLocation] = useState(null);
    useEffect(() => {
        setActiveLocation(location.pathname)
    },[location])
    return (
        <div className="layout-container">
            {console.log(actveLocation,'=====================')}
            <div className="header-container">
                <Header />
            </div>
            <div className="body-conatainer">
                {actveLocation === "/" ? (
                    <Home />
                ) : actveLocation === "/about" ? (
                    <></>
                ) : null}
            </div>
        </div>
    )
}

export default Layout;