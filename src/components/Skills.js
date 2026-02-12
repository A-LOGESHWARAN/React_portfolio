import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrackVisibility from "react-on-screen";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
// ❌ Removed unused meter4 import
import meter5 from "../assets/img/meter5.svg";
import react from "../assets/img/react.png";
import node from "../assets/img/nodejs.png";
import flask from "../assets/img/flask.webp";
import mongodb from "../assets/img/mongodb.png";
import mysql from "../assets/img/sql.svg";
import McA from "../assets/img/McA.svg";
import DockL from "../assets/img/DockL.png";
import AWS from "../assets/img/AWS.png";
import git from "../assets/img/git.png";
import pytorch from "../assets/img/pytorch.webp";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Machine Learning");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skillCategories = {
    "Machine Learning": [
      { img: meter1, name: "TensorFlow" },
      { img: meter2, name: "Scikit-learn" },
      { img: meter3, name: "AutoKeras" },
      { img: pytorch, name: "PyTorch" },
      { img: meter5, name: "Hugging Face" },
    ],
    "Full Stack": [
      { img: react, name: "React.js" },
      { img: node, name: "Node.js" },
      { img: flask, name: "Flask" },
      { img: mysql, name: "MySQL" },
      { img: mongodb, name: "MongoDB" },
    ],
    "Cloud and Other Technologies": [
      { img: McA, name: "Microsoft Azure" },
      { img: DockL, name: "Docker" },
      { img: AWS, name: "AWS" },
      { img: git, name: "Git & GitHub" },
    ],
  };

  const categories = Object.keys(skillCategories);
  const skills = skillCategories[selectedCategory];

  const wipeVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <motion.div
                  className="skill-bx"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  <motion.h2 variants={itemVariants} style={{ fontFamily: "'Centra', sans-serif" }}>
                    Skills
                  </motion.h2>
                  <motion.p variants={itemVariants} style={{ fontFamily: "'Centra', sans-serif" }}>
                    I specialize in Full Stack Development, Machine Learning, and
                    UI/UX Design — combining technical expertise with creative
                    problem-solving.
                  </motion.p>

                  {/* 🌟 Animated Category Tabs */}
                  <motion.div
                    className="category-tabs"
                    variants={containerVariants}
                  >
                    {categories.map((cat, index) => (
                      <motion.button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? "active" : ""
                          }`}
                        onClick={() => setSelectedCategory(cat)}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {cat}
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* 🌈 Continuous Marquee Animation */}
                  <div className="skill-marquee-container">
                    <div className="marquee-track">
                      {/* Duplicate skills for seamless loop (4 sets) */}
                      {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div className="marquee-item" key={`${skill.name}-${index}`}>
                          <motion.div
                            className="skill-card"
                            whileHover={{
                              y: -5,
                              scale: 1.05,
                              boxShadow: "0 10px 30px rgba(108, 99, 255, 0.4)",
                              borderColor: "#6c63ff",
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img src={skill.img} alt={skill.name} />
                            <h5>{skill.name}</h5>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>

      {/* ✅ Fixed alt text to avoid redundancy warning */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Decorative background"
      />
    </section>
  );
};
