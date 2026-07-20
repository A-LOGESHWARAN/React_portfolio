import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("flowchart"); // "flowchart" or "timeline"
  const [activePhase, setActivePhase] = useState(0);

  const internshipPhases = [
    {
      title: "Machine Learning Intern ",
      subtitle: "Robust servers and secure authorization flows",
      timeframe: "Week 6 - 8",
      icon: "⚙️",
      description: "Engineered secure backend APIs with Node.js and Express, integrated secure JWT middleware, and designed structured schema validators.",
      achievements: [
        "Developed an enterprise-grade secure JSON Web Token (JWT) authorization workflow with automated token refresh cycles.",
        "Wrote scalable RESTful API controllers with rate-limiting middleware to protect server resources from DDoS threats.",
        "Connected third-party webhooks and automated verification systems for instantaneous status updates."
      ],
      tech: ["Express.js", "Node.js", "JWT", "MongoDB", "REST APIs"],
      metric: { val: "100%", label: "API Auth Security" }
    },
    {
      title: "Cloud Integration & Analytics",
      subtitle: "Automating pipelines and deploying to global CDNs",
      timeframe: "Week 9 - 10",
      icon: "☁️",
      description: "Configured automated CI/CD pipelines, managed cloud host configurations, and integrated Vercel and AWS micro-deployment infrastructures.",
      achievements: [
        "Configured automated GitHub Action workflows for continuous integration and immediate preview deployments.",
        "Optimized client bundling configurations and image compression, reducing page weight and load times by 35%.",
        "Integrated analytic triggers for tracking user engagement and measuring component interaction efficiency."
      ],
      tech: ["AWS", "Vercel", "GitHub Actions", "Nginx", "Analytics"],
      metric: { val: "35%", label: "Load Time Reduction" }
    }
  ];

  const currentPhaseData = internshipPhases[activePhase];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 16 }
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <motion.div
              className="experience-bx"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {/* Header */}
              <motion.h2 variants={itemVariants} className="experience-title">
                Experience
              </motion.h2>
              <motion.p variants={itemVariants} className="experience-desc">
                Presently working as an Engineering Intern at <span>Deffo Tech</span>. Here is the operational roadmap of my technical growth and project lifecycle delivery.
              </motion.p>

              {/* View Toggle */}
              <motion.div className="experience-toggle" variants={itemVariants}>
                <button
                  className={`toggle-btn ${activeTab === "flowchart" ? "active" : ""}`}
                  onClick={() => setActiveTab("flowchart")}
                >
                  <span className="toggle-icon">📊</span> Flowchart Map
                </button>
                <button
                  className={`toggle-btn ${activeTab === "timeline" ? "active" : ""}`}
                  onClick={() => setActiveTab("timeline")}
                >
                  <span className="toggle-icon">⏳</span> Chronological Timeline
                </button>
              </motion.div>

              {/* FLOWCHART VIEW */}
              {activeTab === "flowchart" && (
                <div className="flowchart-container">
                  {/* SVG Electric Connector Paths */}
                  <svg className="flowchart-svg-desktop" viewBox="0 0 800 100">
                    {/* Background connector line */}
                    <path
                      d="M 100 50 L 700 50"
                      fill="none"
                      stroke="rgba(108, 99, 255, 0.15)"
                      strokeWidth="4"
                    />
                    {/* Glowing active path line */}
                    <path
                      d={`M 100 50 L ${100 + activePhase * 200} 50`}
                      fill="none"
                      stroke="url(#electric-grad)"
                      strokeWidth="4"
                      className="electric-path"
                    />
                    <defs>
                      <linearGradient id="electric-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#aa367c" />
                        <stop offset="50%" stopColor="#6c63ff" />
                        <stop offset="100%" stopColor="#00bcd4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Flowchart Nodes */}
                  <div className="flowchart-nodes">
                    {internshipPhases.map((phase, idx) => (
                      <motion.div
                        key={idx}
                        className={`flowchart-node-wrapper ${idx === activePhase ? "active" : ""} ${idx < activePhase ? "completed" : ""}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActivePhase(idx)}
                      >
                        <div className="node-marker">
                          <span className="node-icon">{phase.icon}</span>
                          {idx === activePhase && (
                            <span className="node-ripple" />
                          )}
                        </div>
                        <div className="node-label">
                          <span className="node-time">{phase.timeframe}</span>
                          <h5 className="node-title">{phase.title.split(" & ")[0]}</h5>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIMELINE VIEW */}
              {activeTab === "timeline" && (
                <div className="timeline-container">
                  <div className="timeline-line">
                    <div
                      className="timeline-progress"
                      style={{ height: `${(activePhase / (internshipPhases.length - 1)) * 100}%` }}
                    />
                  </div>
                  {internshipPhases.map((phase, idx) => (
                    <motion.div
                      key={idx}
                      className={`timeline-item ${idx % 2 === 0 ? "left" : "right"} ${idx === activePhase ? "active" : ""}`}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => setActivePhase(idx)}
                    >
                      <div className="timeline-dot">
                        <span className="dot-icon">{phase.icon}</span>
                      </div>
                      <div className="timeline-card">
                        <span className="timeline-time">{phase.timeframe}</span>
                        <h3>{phase.title}</h3>
                        <p>{phase.subtitle}</p>
                        <span className="timeline-card-click">Click to explore details</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* INTERACTIVE DETAILS PANEL */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  className="phase-details-dashboard"
                  variants={dashboardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Row className="align-items-center">
                    <Col lg={7} md={12}>
                      <div className="details-header-block">
                        <span className="details-badge">{currentPhaseData.timeframe}</span>
                        <h3 className="details-main-title">
                          <span className="details-icon">{currentPhaseData.icon}</span> {currentPhaseData.title}
                        </h3>
                        <h4 className="details-subtitle">{currentPhaseData.subtitle}</h4>
                        <p className="details-desc-paragraph">{currentPhaseData.description}</p>
                      </div>

                      <div className="details-achievements">
                        <h5>Key Contributions & Achievements</h5>
                        <ul>
                          {currentPhaseData.achievements.map((item, keyIdx) => (
                            <motion.li
                              key={keyIdx}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: keyIdx * 0.1 }}
                            >
                              <span className="achievement-tick">⚡</span>
                              <span className="achievement-text">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Col>

                    <Col lg={5} md={12}>
                      <div className="details-stats-tech-box">
                        <div className="details-stat-metric">
                          <span className="metric-value">{currentPhaseData.metric.val}</span>
                          <span className="metric-label">{currentPhaseData.metric.label}</span>
                          <div className="metric-glow-ring" />
                        </div>

                        <div className="details-tech-stack">
                          <h5>Tools & Technologies Used</h5>
                          <div className="tech-pills-container">
                            {currentPhaseData.tech.map((t) => (
                              <motion.span
                                key={t}
                                className="tech-pill"
                                whileHover={{
                                  scale: 1.08,
                                  boxShadow: "0 6px 15px rgba(108, 99, 255, 0.4)",
                                  borderColor: "#6c63ff"
                                }}
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              </AnimatePresence>

            </motion.div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Decorative background"
      />
    </section>
  );
};
