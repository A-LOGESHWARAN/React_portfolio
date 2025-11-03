import { Container, Row, Col, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Resume Screener",
      description:
        "A machine learning-based web application that automates resume screening using NLP to extract key details and rank candidates efficiently.",
      github: "https://github.com/A-LOGESHWARAN/Resume_screener",
    },
    {
      title: "Smart City App",
      description:
        "An Android app designed for tourists, providing information about attractions, services, and real-time city updates.",
      github: "https://github.com/yourusername/smart-city",
    },
    {
      title: "Personalized Learning Recommender",
      description:
        "An AutoML-powered system that suggests personalized learning paths by comparing neural activation functions like ReLU, Sigmoid, and Softmax.",
      github: "https://github.com/yourusername/learning-recommender",
    },
    {
      title: "Personalized Learning Recommender",
      description:
        "An AutoML-powered system that suggests personalized learning paths by comparing neural activation functions like ReLU, Sigmoid, and Softmax.",
      github: "https://github.com/yourusername/learning-recommender",
    },
    {
      title: "Personalized Learning Recommender",
      description:
        "An AutoML-powered system that suggests personalized learning paths by comparing neural activation functions like ReLU, Sigmoid, and Softmax.",
      github: "https://github.com/yourusername/learning-recommender",
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
                    These projects reflect my hands-on experience and passion
                    for building practical and innovative applications.
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
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Card
                            className="shadow-lg border-0 h-100 text-center p-3"
                            style={{
                              borderRadius: "16px",
                              background:
                                "linear-gradient(145deg, #1f1f2e, #2b2b3c)",
                              color: "white",
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-10px)";
                              e.currentTarget.style.boxShadow =
                                "0 10px 20px rgba(0, 0, 0, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow =
                                "0 5px 10px rgba(0, 0, 0, 0.2)";
                            }}
                          >
                            <Card.Body>
                              <Card.Title className="mb-3" style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                                {project.title}
                              </Card.Title>
                              <Card.Text style={{ fontSize: "0.95rem" }}>
                                {project.description}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </a>
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
