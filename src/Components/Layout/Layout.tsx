import React, { act } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import Header from "../Header/Header.tsx";
import Home from "../../Pages/Home/Home.tsx";
import About from "../../Pages/About/About.tsx";

// stylesheet
import "../Layout/Layout.css";

const Layout = () => {
  const location = useLocation();
  const [actveLocation, setActiveLocation] = useState<string | null>(null);
  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);
  return (
    <div className="layout-container">
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
  );
};

export default Layout;
