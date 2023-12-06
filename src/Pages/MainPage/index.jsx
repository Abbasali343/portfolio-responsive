import HomePage from "../HomePage";
import AboutUs from "../AboutUs";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div className="main-page-container">
       <HomePage />
       <AboutUs />
       <Resume />
       <Portfolio />
       <Testimonials />
       <ContactMe />
      </div>
    </>
  );
}
