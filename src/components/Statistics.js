import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2, // Smooth 2s duration
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

export const Statistics = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="statistics" id="statistics">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-center mb-5"
                style={{
                  fontFamily: "'Centra', sans-serif",
                  fontWeight: 700,
                  fontSize: "45px",
                  background: "linear-gradient(90deg, #fff, #6c63ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                My Achievements
              </motion.h2>

              <Row className="justify-content-center">
                {stats.map((stat, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={3}
                    className="mb-4 text-center"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="stat-card"
                      whileHover={{
                        y: -10,
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(108, 99, 255, 0.3)",
                        borderColor: "rgba(108, 99, 255, 0.5)",
                      }}
                      style={{
                        padding: "30px 20px",
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                      }}
                    >
                      <motion.div
                        className="stat-icon"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        style={{
                          fontSize: "3rem",
                          marginBottom: "15px",
                          display: "inline-block",
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <h3
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: 700,
                          color: "#6c63ff",
                          margin: "10px 0",
                          fontFamily: "'Centra', sans-serif",
                        }}
                      >
                        <Counter value={stat.number} />
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
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
