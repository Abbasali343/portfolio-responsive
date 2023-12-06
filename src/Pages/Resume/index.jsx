import Header from "../../Components/Header";
import Education from "./Education";
import Experience from "./Experience";
import "../AboutUs/AboutUs.css";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="about-us-main-container" id="about-us">
        <div className="resume-sub-container">
          <div className="resume-main-body">
            <div className="header">
              <Header text={"RESUME"} />
            </div>
            <div className="education-container">
              <Education />
            </div>
            <div className="experience-container"><Experience /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
