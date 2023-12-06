import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../../Components/Header";
import "../AboutUs/AboutUs.css";
import "./Testimonials.css";

const data = [0, 1, 2, 3, 4, 5];
function Testimonials() {
  const [slider, setSlider] = useState(0);

  const handleSlider = (index) => {
    setSlider(index);
  };
  return (
    <>
      <div className="about-us-main-container" id="about-us">
        <div className="about-us-sub-container">
          <div className="Testimonials-main-body">
            <div className="header">
              <Header text={"TESTIMONIALS"} />
            </div>
            <div className="testimonial-container">
              <div className="testimonial-slider-container">
                <div className="testimonial-card-container">
                  {data.map((item, index) => (
                    <div
                      className={`testimonial-card`}
                      style={{ left: `${item * 100}%` }}
                      id={`card${index}`}
                    >
                      <div className="testimonial-card-sub-container"></div>
                    </div>
                  ))}
                </div>
                <div className="slider-change-container">
                  <div className="slider-btn-container">
                    {data.map((item, index) => (
                      <>
                        <div
                          className={
                            item === slider
                              ? "slider-change-btn selected"
                              : "slider-change-btn"
                          }
                          onClick={() => handleSlider(index)}
                        ></div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
