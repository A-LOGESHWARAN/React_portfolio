import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 ">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0 d-flex align-items-center">

            <span className="fw-bold fs-4">Logeshwaran A</span>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="social-icon">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={navIcon1} alt="LinkedIn" style={{ height: 28 }} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={navIcon2} alt="GitHub" style={{ height: 28 }} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={navIcon3} alt="Twitter" style={{ height: 28 }} />
              </motion.a>
            </div>
          </Col>
          <Col md={4} className="text-md-end text-center small">
            <div>
              &copy; {new Date().getFullYear()} Logeshwaran. All Rights Reserved.
            </div>
            <div>
              Crafted with <span style={{ color: "#e25555" }}>&hearts;</span> in India
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
