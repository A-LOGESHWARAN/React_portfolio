import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

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
      title: "Hand-to-Virtual-Boundary Detection POC",
      description:
        "Developed a real-time Hand-to-Virtual-Boundary Detection POC using classical computer vision with OpenCV and NumPy, without external pose APIs.",
      github: "https://github.com/A-LOGESHWARAN/HandTracking_POC",
    },
    {
      title: "Pneumonia Detection",
      description:
        "A deep learning model that detects pneumonia from chest X-ray images for faster and accurate diagnosis.",
      github: "https://github.com/A-LOGESHWARAN/Chest_Resnet",
    },
    {
      title: "Patient Risk Prediction",
      description:
        "Developed an end-to-end ICU Patient Deterioration Prediction System using XGBoost, SMOTE, and Optuna for 88%+ accuracy on 1M patient records.",
      github: "https://github.com/A-LOGESHWARAN/Patient_Risk_Prediction",
    },
    {
      title: "Multi-Vendor E-Commerce Platform with Role-Based Dashboards",
      description:
        "Built a scalable MERN-stack e-commerce system with JWT authentication, role-based authorization, MongoDB data modeling, seller approval flows, order lifecycle management, and a chatbot-assisted buyer experience.",
      github: "https://final-ecom-six.vercel.app/",
    },
  ];

  /* ── Framer Motion variants ── */
  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.55,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.h2 className="text-center mb-4" variants={headingVariants}>
                Projects
              </motion.h2>
              <motion.p className="text-center mb-5" variants={headingVariants}>
                These projects showcase my hands-on experience in building
                intelligent and user-friendly applications.
              </motion.p>

              <Row className="justify-content-center">
                {projects.map((project, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    className="mb-4 d-flex justify-content-center"
                  >
                    <motion.div
                      className="project-card-wrapper"
                      custom={index}
                      variants={cardVariants}
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                        boxShadow: "0 20px 40px rgba(108, 99, 255, 0.35)",
                        borderColor: "rgba(108,99,255,0.7)",
                      }}
                      style={{
                        borderRadius: "16px",
                        background: "linear-gradient(145deg, #1f1f2e, #2b2b3c)",
                        color: "white",
                        minHeight: "250px",
                        width: "100%",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        border: "1px solid rgba(108,99,255,0.15)",
                        cursor: "pointer",
                        willChange: "transform, box-shadow",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            marginBottom: "12px",
                          }}
                        >
                          {project.title}
                        </div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            color: "#dcdcdc",
                            lineHeight: "1.6",
                          }}
                        >
                          {project.description}
                        </div>
                      </div>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-btn mt-3"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: "inline-block",
                          textAlign: "center",
                          textDecoration: "none",
                          marginTop: "16px",
                        }}
                      >
                        Visit Project
                      </motion.a>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .visit-btn {
          background: linear-gradient(135deg, #6c63ff, #9b8cff);
          color: #fff;
          border: none;
          padding: 10px 22px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.4);
        }
        .visit-btn:hover {
          box-shadow: 0 0 20px rgba(108, 99, 255, 0.8);
          color: #fff;
        }
      `}</style>
    </section>
  );
};
