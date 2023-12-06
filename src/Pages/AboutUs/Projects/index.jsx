import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-container1">
          <div className="experience-box-container">
            <h4 className="projects-details-heading">15+</h4>
            <p className="projects-details-description">Years Experience</p>
          </div>
          <hr className="horizontal-line" />
          <div className="projects-box-container">
            <h4 className="projects-details-heading">5+</h4>
            <p className="projects-details-description">Projects Done</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="projects-container2">
          <div className="clients-box-container">
            <h4 className="projects-details-heading">15+</h4>
            <p className="projects-details-description">Happy Clients</p>
          </div>
          <hr className="horizontal-line" />
          <div className="followers-box-container">
            <h4 className="projects-details-heading">15+</h4>
            <p className="projects-details-description">Followers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
