import Header from "../../Components/Header";
import phone from "../../assets/Phone.png";
import email from "../../assets/Email.png";
import "../AboutUs/AboutUs.css";
import "./ContactMe.css";

function ContactMe() {
  return (
    <>
      <div className="about-us-main-container" id="about-us">
        <div className="about-us-sub-container">
          <div className="contact-main-body">
            <div className="header">
              <Header text={"CONTACT ME"} />
            </div>
            <div className="contact-intro-container">
              <div className="contact-heading-container">
                <h1 className="about-details-heading-intro-small contact-heading">
                  Feel<span className="heading-intro-styled"> Free</span> to
                  contact
                </h1>
                <p className="description contact-description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="contact-main-container">
                <div className="contact-sub-container">
                  <img src={phone} className="contact-image" />
                  <h3 className="contact-main-heading">1111111111111</h3>
                </div>
                <div className="contact-sub-container">
                  <img src={email} className="contact-image contact-image2" />
                  <h3 className="contact-main-heading">abbas@gmail.com</h3>
                </div>
              </div>
              <div className="contact-greetings-container">
                <h1>Thanks For Patience!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
