import image from "../../../assets/rent.png";
import "./Profession.css";

function Profession() {
  return (
    <>
      <div className="profession-container">
        <h3 className="profession-text">What I Do?</h3>
        <div className="profession-sub-container">
          <div className="profession-main-container">
            <div className="profession-main-sub-container1">
              <img src={image} className="profession-img" />
            </div>
            <div className="profession-main-sub-container2">
              <h4 className="profession-heading">Web Development</h4>
              <p className="profession-description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div className="profession-main-container">
            <div className="profession-main-sub-container1">
              <img src={image} className="profession-img" />
            </div>
            <div className="profession-main-sub-container2">
              <h4 className="profession-heading">Web Development</h4>
              <p className="profession-description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div className="profession-main-container">
            <div className="profession-main-sub-container1">
              <img src={image} className="profession-img" />
            </div>
            <div className="profession-main-sub-container2">
              <h4 className="profession-heading">Web Development</h4>
              <p className="profession-description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profession;
