import Header from "../../Components/Header";
import Projects from "./Projects";
import Profession from "./Profession";
import Sidebar from "../../Layout/Sidebar";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="about-us-main-container" id="about-us">
        <div className="about-us-sub-container">
          <div className="about-us-main-body">
            <div className="header">
              <Header text={"ABOUT ME"} />
            </div>
            <div className="about-us-intro-container">
              <div className="about-details-heading-container">
                <h1 className="about-details-heading-intro-small">
                  I'm<span className="heading-intro-styled">Abbas Ali,</span>{" "}
                  Web Developer/Graphic Designer
                </h1>
              </div>
              <div className="description-container">
                <p className="description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="projects">
              <Projects />
            </div>
            <div className="professions">
              <Profession />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
