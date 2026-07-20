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
  const [isBrowserHovered, setIsBrowserHovered] = useState(false);

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

  const showcaseVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
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
              <motion.div
                variants={slideUp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  marginBottom: "16px",
                  width: "fit-content",
                }}
              >
                <span className="avail-dot" />
                <span
                  style={{
                    color: "#4ade80",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  Available for Opportunities
                </span>
              </motion.div>

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

        {/* ── Company Website Browser Mockup Showcase ── */}
        <Row className="justify-content-center" style={{ marginTop: "70px" }}>
          <Col xs={12}>
            <motion.div
              variants={showcaseVariants}
              initial="hidden"
              animate="visible"
              className="company-showcase-wrapper"
            >
              {/* Label above */}
              <div className="showcase-label">
                <span className="showcase-pill">
                  <span className="showcase-dot" />
                  My Professional Website
                </span>
                <h3 className="showcase-heading">
                  Logeshwaran A — Software &amp; AI Systems Engineer
                </h3>
                <p className="showcase-subtext">
                  A clean, minimal freelance site showcasing my services, selected work, and project process.
                </p>
              </div>

              {/* Browser Mockup */}
              <motion.div
                className="browser-mockup"
                onHoverStart={() => setIsBrowserHovered(true)}
                onHoverEnd={() => setIsBrowserHovered(false)}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 40px 80px rgba(108,99,255,0.3), 0 0 0 1px rgba(108,99,255,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                {/* Browser Top Bar */}
                <div className="browser-topbar">
                  <div className="browser-dots">
                    <span className="dot-red" />
                    <span className="dot-yellow" />
                    <span className="dot-green" />
                  </div>
                  <div className="browser-url-bar">
                    <span className="url-lock">🔒</span>
                    <span className="url-text">logeshwaran.dev</span>
                  </div>
                  <div className="browser-actions">
                    <span className="browser-share-icon">⤴</span>
                  </div>
                </div>

                {/* Screenshot Content */}
                <div className="browser-content">
                  <iframe
                    src="/company-website.html"
                    title="Logeshwaran A — Company Website Preview"
                    className="browser-screenshot"
                    style={{ border: 'none' }}
                  />

                  {/* Hover Overlay with Visit Button */}
                  <motion.div
                    className="browser-overlay"
                    animate={{ opacity: isBrowserHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href="/company-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-website-btn"
                      whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(108,99,255,0.8)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Visit Website</span>
                      <ArrowRightCircle size={20} />
                    </motion.a>
                    <p className="overlay-subtext">Click to explore the live site</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Below mockup CTA row */}
              <div className="showcase-cta-row">
                <div className="showcase-tech-pills">
                  <span className="s-pill">HTML</span>
                  <span className="s-pill">CSS</span>
                  <span className="s-pill">Vanilla JS</span>
                  <span className="s-pill">Responsive</span>
                  <span className="s-pill">SEO Optimized</span>
                </div>
                <a
                  href="/company-website.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <motion.button
                    className="connect-btn showcase-open-btn"
                    whileHover={{ scale: 1.06, boxShadow: "0 0 22px rgba(108,99,255,0.65)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Open Full Website</span> <ArrowRightCircle size={20} />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .avail-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
          animation: pulse-green 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-green {
          0%   { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
          70%  { box-shadow: 0 0 0 8px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        /* ── Company Showcase ── */
        .company-showcase-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          padding-bottom: 60px;
        }

        .showcase-label {
          text-align: center;
          max-width: 600px;
        }

        .showcase-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(108, 99, 255, 0.12);
          border: 1px solid rgba(108, 99, 255, 0.35);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .showcase-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a78bfa;
          animation: pulse-purple 1.8s ease-in-out infinite;
        }

        @keyframes pulse-purple {
          0%   { box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7); }
          70%  { box-shadow: 0 0 0 7px rgba(167, 139, 250, 0); }
          100% { box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
        }

        .showcase-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .showcase-subtext {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }

        /* ── Browser Mockup ── */
        .browser-mockup {
          width: 100%;
          max-width: 900px;
          background: #1a1a2e;
          border-radius: 16px;
          border: 1px solid rgba(108, 99, 255, 0.2);
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06);
          cursor: pointer;
          position: relative;
        }

        .browser-topbar {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #111128;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .browser-dots {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .dot-red, .dot-yellow, .dot-green {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .dot-red    { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green  { background: #28c840; }

        .browser-url-bar {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 380px;
          margin: 0 auto;
        }

        .url-lock {
          font-size: 11px;
          opacity: 0.6;
        }

        .url-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.02em;
        }

        .browser-actions {
          flex-shrink: 0;
          font-size: 14px;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
        }

        .browser-content {
          position: relative;
          width: 100%;
          background: #faf9f6;
          overflow: hidden;
        }

        .browser-screenshot {
          width: 100%;
          height: 500px;
          display: block;
          transition: transform 0.6s ease;
        }

        .browser-mockup:hover .browser-screenshot {
          transform: scale(1.02);
        }

        .browser-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 30, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          pointer-events: none;
        }

        .browser-overlay a {
          pointer-events: all;
        }

        .visit-website-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #6c63ff, #aa367c);
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(108,99,255,0.45);
          transition: all 0.3s ease;
        }

        .overlay-subtext {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        /* ── Showcase CTA Row ── */
        .showcase-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          max-width: 900px;
          flex-wrap: wrap;
        }

        .showcase-tech-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .s-pill {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .showcase-open-btn {
          background: linear-gradient(135deg, #6c63ff, #aa367c) !important;
          font-size: 0.88rem !important;
          padding: 10px 22px !important;
        }

        @media (max-width: 768px) {
          .showcase-cta-row {
            flex-direction: column;
            align-items: center;
          }
          .showcase-heading {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};
