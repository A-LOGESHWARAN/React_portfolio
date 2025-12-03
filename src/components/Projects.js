import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
      title: "RAG Chatbot – Document-aware AI Assistant",
      description:
        "A Retrieval-Augmented Generation (RAG)-based chatbot built with FastAPI, FAISS vector search, and Sentence Transformers.",
      github: "https://github.com/A-LOGESHWARAN/BOT",
    },
    {
      title: "Personalized Learning Recommender",
      description:
        "An AutoML-powered system that suggests personalized learning paths by comparing neural activation functions like ReLU, Sigmoid, and Softmax.",
      github: "https://github.com/yourusername/learning-recommender",
    },
    {
      title: "Pneumonia Detection",
      description:
        "A deep learning model that detects pneumonia from chest X-ray images for faster and accurate diagnosis.",
      github: "https://github.com/yourusername/pneumonia-detection",
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
                    These projects showcase my hands-on experience in building
                    intelligent and user-friendly applications.
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
                        <Card
                          className="shadow-lg border-0 text-center p-3 project-card"
                          style={{
                            borderRadius: "16px",
                            background:
                              "linear-gradient(145deg, #1f1f2e, #2b2b3c)",
                            color: "white",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            minHeight: "250px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow =
                              "0 12px 25px rgba(0, 0, 0, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow =
                              "0 5px 15px rgba(0, 0, 0, 0.2)";
                          }}
                        >
                          <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                              <Card.Title
                                className="mb-3"
                                style={{
                                  fontSize: "1.25rem",
                                  fontWeight: "600",
                                }}
                              >
                                {project.title}
                              </Card.Title>
                              <Card.Text
                                style={{
                                  fontSize: "0.95rem",
                                  color: "#dcdcdc",
                                  minHeight: "60px",
                                }}
                              >
                                {project.description}
                              </Card.Text>
                            </div>
                            <Button
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="visit-btn mt-3"
                            >
                              Visit Project
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* ✅ Updated Button Style (Smaller) */}
      <style>{`
        .visit-btn {
          background: #6c63ff;
          color: #fff;
          border: none;
          padding: 9px 5px; /* reduced size */
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem; /* smaller text */
          transition: all 0.3s ease;
          box-shadow: 0 0 6px rgba(108, 99, 255, 0.4);
        }

        .visit-btn:hover {
          background: #7d72ff;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(108, 99, 255, 0.8);
        }

        .project-card:hover {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
