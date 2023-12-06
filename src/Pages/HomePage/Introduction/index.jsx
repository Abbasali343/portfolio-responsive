import { useEffect } from "react";
import "./Introduction.css";
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

export default function Introduction() {
  return (
    <>
      <div className="intro-main-container">
        <div className="intro-sub-container">
          <div className="intro-details-container1">
            <p className="home-intro-greetings">Hi There!</p>
          </div>
          <div className="intro-details-container2">
            <h1 className="intro-heading">
              I'M <span className="intro-name">Abbas Ali</span>
            </h1>
          </div>
          <div className="intro-details-container3">
            <h3 className="intro-profession">Web Developer/Graphic Designer</h3>
          </div>
          <div className="intro-details-container4">
            <p className="description">{text}</p>
          </div>
          <div className="intro-details-container5">
            <a href="#about-us" className="intro-btn">More About Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
