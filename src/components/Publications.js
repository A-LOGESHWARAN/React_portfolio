import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Publications = () => {
  const publications = [
    {
      title: "Computer Vision-Based Pneumonia Diagnosis using Convolutional Neural Networks and Pretrained Models",
      conference: "Book Chapter in 'Deep Learning for Medical Image Analysis' - Springer",
      year: "2026",
      description:
        "This publication explores the application of convolutional neural networks (CNNs) and pretrained models for the diagnosis of pneumonia from medical images, highlighting the effectiveness of deep learning techniques in healthcare.",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003541011-6/computer-vision-based-pneumonia-diagnosis-using-convolutional-neural-networks-pretrained-models-ajmal-mohamed-logeshwaran-swaminathan-varun-ashokkumar-kumar-sateesh",
    },
  ];

  return (
    <section className="publication" id="publications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  style={{ fontFamily: "'Centra', sans-serif" }}
                >
                  <h2 className="text-center mb-4" style={{ fontFamily: "'Centra', sans-serif", fontWeight: 700 }}>Publications</h2>
                  <p className="text-center mb-5" style={{ fontFamily: "'Centra', sans-serif" }}>
                    Research papers, articles, and technical publications
                    showcasing my contributions to the field.
                  </p>

                  <Row className="justify-content-center">
                    {publications.map((publication, index) => (
                      <Col
                        key={index}
                        xs={12}
                        sm={10}
                        md={8}
                        className="mb-4 d-flex justify-content-center"
                      >
                        <Card
                          className="shadow-lg border-0 publication-card"
                          style={{
                            borderRadius: "16px",
                            background:
                              "linear-gradient(145deg, #1f1f2e, #2b2b3c)",
                            color: "white",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            padding: "40px",
                            textAlign: "center",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-10px)";
                            e.currentTarget.style.boxShadow =
                              "0 20px 40px rgba(108, 99, 255, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 5px 15px rgba(0, 0, 0, 0.2)";
                          }}
                        >
                          <Card.Body className="d-flex flex-column justify-content-between" style={{ padding: 0 }}>
                            <div>
                              <Card.Title
                                className="mb-3"
                                style={{
                                  fontSize: "1.8rem",
                                  fontWeight: 700,
                                  fontFamily: "'Centra', sans-serif",
                                  lineHeight: "1.4",
                                }}
                              >
                                {publication.title}
                              </Card.Title>
                              <Card.Subtitle
                                style={{
                                  fontSize: "1rem",
                                  color: "#b0b0b0",
                                  marginBottom: "20px",
                                  fontFamily: "'Centra', sans-serif",
                                  fontWeight: 500,
                                }}
                              >
                                {publication.conference}
                              </Card.Subtitle>
                              <Card.Text
                                style={{
                                  fontSize: "0.95rem",
                                  color: "#dcdcdc",
                                  lineHeight: "1.6",
                                  marginBottom: "25px",
                                  fontFamily: "'Centra', sans-serif",
                                }}
                              >
                                {publication.description}
                              </Card.Text>
                            </div>
                            <Button
                              href={publication.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="read-btn mt-3"
                            >
                              Read More
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

      <style>{`
        .read-btn {
          background: #6c63ff;
          color: #fff;
          border: none;
          padding: 9px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 6px rgba(108, 99, 255, 0.4);
          width: fit-content;
          margin: 0 auto;
        }

        .read-btn:hover {
          background: #7d72ff;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(108, 99, 255, 0.8);
          color: #fff;
        }

        .publication-card:hover {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
