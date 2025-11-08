import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Resume Screener",
      description:
        "A machine learning-based web app that automates resume screening using NLP and ranks candidates efficiently.",
      github: "https://github.com/A-LOGESHWARAN/Resume_screener",
      imgUrl: "assets/img/resume-screener.png",
    },
    {
      title: "Pneumonia Detection",
      description:
        "A deep learning model that detects pneumonia from chest X-ray images for faster and accurate diagnosis.",
      github: "https://github.com/yourusername/pneumonia-detection",
      imgUrl: "assets/img/pneumonia.png",
    },
    {
      title: "Personalized Learning Recommender",
      description:
        "An AutoML-based system suggesting learning paths by comparing neural activation functions like ReLU, Sigmoid, and Softmax.",
      github: "https://github.com/yourusername/learning-recommender",
      imgUrl: "assets/img/learning.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-center mb-4">Projects</h2>
                  <p className="text-center mb-5">
                    These projects reflect my practical experience in
                    machine learning, Android, and full-stack development.
                  </p>

                  <Row className="justify-content-center">
                    {projects.map((project, index) => (
                      <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        className="mb-4 d-flex justify-content-center"
                      >
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            {/* Front */}
                            <div className="flip-card-front">
                              {project.imgUrl && (
                                <img
                                  src={project.imgUrl}
                                  alt={`${project.title} screenshot`}
                                  className="project-img"
                                />
                              )}
                              <h4>{project.title}</h4>
                            </div>

                            {/* Back */}
                            <div className="flip-card-back">
                              <p>{project.description}</p>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-btn"
                              >
                                Visit Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
