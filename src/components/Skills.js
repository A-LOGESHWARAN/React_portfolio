import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";  
import meter5 from "../assets/img/meter5.svg";
import react from "../assets/img/react.png";
import node from "../assets/img/nodejs.png";
import flask from "../assets/img/flask.webp";
import mongodb from "../assets/img/mongodb.png";
import mysql from "../assets/img/sql.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      { img: meter4, name: "PyTorch" },
      { img: meter5, name: "Hugging Face" },
    ],
    "Full Stack": [
      { img: react, name: "React.js" },
      { img: node, name: "Node.js" },
      { img: flask, name: "Flask" },
      { img: mysql, name: "MySQL" },
      { img: mongodb, name: "MongoDB" },
    ],
    "UI/UX Design": [
      { img: meter1, name: "Figma" },
      { img: meter2, name: "Adobe XD" },
      { img: meter3, name: "Wireframing" },
      { img: meter1, name: "User Research" },
      { img: meter2, name: "Prototyping" },
    ],
  };

  const categories = Object.keys(skillCategories);
  const skills = skillCategories[selectedCategory];

  // Animation variants for the wipe effect
  const wipeVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I specialize in Full Stack Development, Machine Learning, and
                UI/UX Design — combining technical expertise with creative
                problem-solving.
              </p>

              {/* 🌟 Category Tabs */}
              <div className="category-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-btn ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* 🌈 Animated Skill Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  variants={wipeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    {skills.map((skill, index) => (
  <motion.div
    className="item"
    key={index}
    whileHover={{
      rotateY: 20,      // slight 3D tilt
      rotateX: -9,
      scale: 1.05,      // gentle zoom
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 10,
    }}
    style={{
      perspective: 1000, // enables 3D effect
    }}
  >
    <motion.img
      src={skill.img}
      alt={skill.name}
      style={{
        borderRadius: "20px",
        width: "150px",
        height: "150px",
        objectFit: "contain",
        transition: "all 0.3s ease-in-out",
      }}
    />
    <h5>{skill.name}</h5>
  </motion.div>
))}

                  </Carousel>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
