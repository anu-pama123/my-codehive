import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

//stylesheet
import "../Testmonial/Testimonial.css";

const Testimonial = () => {
  return (
    // <div className="slider-container">
    //   <div>
    //     <h1>Testimonial</h1>
    //   </div>
    //   <AwesomeSlider>
    //     <div>1</div>
    //     <div>2</div>
    //     <div>3</div>
    //   </AwesomeSlider>
    // </div>
    <div className="slider-container">
      <h2 className="testimonial-heading">Testimonial</h2>
      <AwesomeSlider bullets={true} organicArrows={true}>
        <div className="testimonial-slide">
          <p className="testimonial-text">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis
            turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a
            finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus,
            eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero
            suscipit porta.”
          </p>
          <p className="testimonial-author">Esther Howard</p>
          <p className="testimonial-role">Managing Director, ABC company</p>
        </div>

        {/* Add more testimonials here */}
        <div className="testimonial-slide">
          <p className="testimonial-text">“Great support and easy integration!”</p>
          <p className="testimonial-author">Sarah Johnson</p>
          <p className="testimonial-role">Founder, XYZ Ltd</p>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Testimonial;
