import Header from "../../Components/Header";
import Navbar from "./Navbar";
import image from "../../assets/pexels-pixabay-220453.jpg";
import "../AboutUs/AboutUs.css";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="about-us-main-container" id="about-us">
        <div className="about-us-sub-container">
          <div className="portfolio-main-body">
            <div className="header">
              <Header text={"PORTFOLIO"} />
            </div>
            <Navbar />
            <div className="images-container">
              <div className="portfolio-image-sub-container img1">
                <img src={image} className="portfolio-image" />
              </div>
              <div className="portfolio-image-sub-container img2">
                <img src={image} className="portfolio-image" />
              </div>
              <div className="portfolio-image-sub-container img3">
                <img src={image} className="portfolio-image" />
              </div>
              <div className="portfolio-image-sub-container img4">
                <img src={image} className="portfolio-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
