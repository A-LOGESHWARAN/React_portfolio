import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    publications: 0,
    skills: 0,
    experience: 0,
  });

  const stats = [
    {
      number: 6,
      label: "Projects Completed",
      icon: "📁",
      key: "projects",
    },
    {
      number: 1,
      label: "Publications",
      icon: "📚",
      key: "publications",
    },
    {
      number: 15,
      label: "Skills Mastered",
      icon: "⚙️",
      key: "skills",
    },
    {
      number: 2,
      label: "Years Experience",
      icon: "⭐",
      key: "experience",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const intervals = {};
    stats.forEach((stat) => {
      let current = 0;
      intervals[stat.key] = setInterval(() => {
        current += Math.ceil(stat.number / 50);
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(intervals[stat.key]);
        }
        setCounts((prev) => ({
          ...prev,
          [stat.key]: current,
        }));
      }, 30);
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section className="statistics" id="statistics">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible: trackVisible }) => {
                if (trackVisible && !isVisible) {
                  setIsVisible(true);
                }
                return (
                  <div
                    className={
                      trackVisible ? "animate__animated animate__fadeIn" : ""
                    }
                    style={{ fontFamily: "'Centra', sans-serif" }}
                  >
                    <h2
                      className="text-center mb-5"
                      style={{
                        fontFamily: "'Centra', sans-serif",
                        fontWeight: 700,
                        fontSize: "45px",
                      }}
                    >
                      My Achievements
                    </h2>

                    <Row className="justify-content-center">
                      {stats.map((stat, index) => (
                        <Col
                          key={index}
                          xs={12}
                          sm={6}
                          md={3}
                          className="mb-4 text-center"
                        >
                          <div
                            className={`stat-card animate__animated ${
                              isVisible ? "animate__bounceIn" : ""
                            }`}
                            style={{
                              padding: "30px 20px",
                              borderRadius: "16px",
                              background:
                                "linear-gradient(145deg, #1f1f2e, #2b2b3c)",
                              transition:
                                "transform 0.3s ease, box-shadow 0.3s ease",
                              cursor: "pointer",
                              animationDelay: `${index * 0.15}s`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                              e.currentTarget.style.boxShadow =
                                "0 20px 40px rgba(108, 99, 255, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0) scale(1)";
                              e.currentTarget.style.boxShadow =
                                "0 5px 15px rgba(0, 0, 0, 0.2)";
                            }}
                          >
                            <div
                              className="stat-icon"
                              style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              {stat.icon}
                            </div>
                            <h3
                              style={{
                                fontSize: "2.5rem",
                                fontWeight: 700,
                                color: "#6c63ff",
                                margin: "10px 0",
                                fontFamily: "'Centra', sans-serif",
                              }}
                            >
                              {counts[stat.key]}
                              {stat.key !== "experience" ? "+" : ""}
                            </h3>
                            <p
                              style={{
                                fontSize: "1rem",
                                color: "#b0b0b0",
                                fontFamily: "'Centra', sans-serif",
                                fontWeight: 500,
                              }}
                            >
                              {stat.label}
                            </p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
