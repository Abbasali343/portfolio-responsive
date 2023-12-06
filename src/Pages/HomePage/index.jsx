import Introduction from "./Introduction";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      {" "}
      <div className="home-page-container">
        <div className="home-intro-container">
          <Introduction />
        </div>
        <div className="home-image-container"></div>
      </div>
    </>
  );
}
