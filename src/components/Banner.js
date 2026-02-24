import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import hero from "../assets/img/Bannerblurr.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const toRotate = ["Full Stack Developer", "ML Engineer", "Software Developer"];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % toRotate.length);
        setVisible(true);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ---------- Framer Motion variants ---------- */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* ── Left column ── */}
          <Col xs={12} md={6} xl={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="tagline" variants={slideUp}>
                ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING
              </motion.span>

              <motion.h1 variants={slideUp}>
                {`I'm LOGESHWARAN A`}{" "}
                <span className="txt-rotate">
                  <span
                    className="wrap"
                    style={{
                      display: "inline-block",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(-10px)",
                    }}
                  >
                    {toRotate[index]}
                  </span>
                </span>
              </motion.h1>

              <motion.p variants={slideUp}>
                Passionate Full Stack Developer and ML Engineer with a strong
                foundation in building intelligent, data-driven web applications.
                Skilled in combining machine learning models with elegant UI/UX
                designs to create seamless and impactful digital experiences.
                Skilled in deploying and managing scalable applications on AWS,
                Azure, and GCP using modern DevOps practices. Passionate about
                building secure, efficient, and serverless cloud solutions for
                real-world applications.
              </motion.p>

              <motion.div
                variants={slideUp}
                style={{ marginTop: "30px", display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}
              >
                <a href="#projects" style={{ textDecoration: "none" }}>
                  <motion.button
                    className="connect-btn"
                    style={{ background: "#6c63ff", border: "none" }}
                    whileHover={{ scale: 1.07, boxShadow: "0 0 22px rgba(108,99,255,0.7)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View My Projects</span> <ArrowRightCircle size={25} />
                  </motion.button>
                </a>
                <a href="#publications" style={{ textDecoration: "none" }}>
                  <motion.button
                    className="connect-btn"
                    style={{ background: "#6c63ff", border: "none" }}
                    whileHover={{ scale: 1.07, boxShadow: "0 0 22px rgba(108,99,255,0.7)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Publications</span> <ArrowRightCircle size={25} />
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </Col>

          {/* ── Right column ── */}
          <Col xs={12} md={6} xl={5}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={hero} alt="Header Img" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
