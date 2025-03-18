import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

//stylesheet
import "../Testmonial/Testimonial.css";

const Testimonial = () => {
    return (
        <div className="slider-container">
            <div>
                <h1>Testimonial</h1>
            </div>
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </AwesomeSlider>
        </div>
    )
}

export default Testimonial;