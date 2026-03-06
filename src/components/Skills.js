import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

  const skillCategories = {
    "Programming Languages": [
      { icon: "🐍", name: "Python" },
      { icon: "⚙️", name: "C / C++" },
      { icon: "🟨", name: "JavaScript" },
      { icon: "🗄️", name: "SQL" },
    ],
    "AI / ML": [
      { icon: "🤖", name: "Machine Learning" },
      { icon: "🧠", name: "Deep Learning" },
      { icon: "💬", name: "NLP" },
      { icon: "🔍", name: "ODQA" },
      { icon: "✨", name: "LLM Applications" },
    ],
    "Frameworks": [
      { icon: "🔶", name: "TensorFlow" },
      { icon: "🔥", name: "PyTorch" },
      { icon: "📐", name: "Scikit-learn" },
      { icon: "🤗", name: "Hugging Face" },
      { icon: "🐼", name: "Pandas" },
      { icon: "🔢", name: "NumPy" },
    ],
    "Web Development": [
      { icon: "🌐", name: "HTML" },
      { icon: "🎨", name: "CSS" },
      { icon: "🟨", name: "JavaScript" },
      { icon: "⚛️", name: "React.js" },
      { icon: "🟢", name: "Node.js" },
      { icon: "🚂", name: "Express.js" },
    ],
    "Databases": [
      { icon: "🐬", name: "MySQL" },
      { icon: "🍃", name: "MongoDB" },
      { icon: "🐘", name: "PostgreSQL" },
    ],
    "Tools & Platforms": [
      { icon: "🐙", name: "Git & GitHub" },
      { icon: "💻", name: "VS Code" },
      { icon: "📓", name: "Jupyter Notebook" },
      { icon: "🐳", name: "Docker" },
      { icon: "🐧", name: "Linux" },
    ],
    "Data & Visualization": [
      { icon: "🧹", name: "Data Cleaning" },
      { icon: "📊", name: "Data Analysis" },
      { icon: "📈", name: "Matplotlib" },
      { icon: "🌊", name: "Seaborn" },
      { icon: "📉", name: "Power BI / Tableau" },
    ],
  };

  const categories = Object.keys(skillCategories);
  const skills = skillCategories[selectedCategory];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="skill-bx"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Header */}
              <motion.h2 variants={headerVariants} style={{ fontFamily: "'Centra', sans-serif" }}>
                Skills
              </motion.h2>
              <motion.p variants={headerVariants} style={{ fontFamily: "'Centra', sans-serif" }}>
                From AI & Machine Learning to Full Stack Web Development — here's what I bring to the table.
              </motion.p>

              {/* Category Tabs */}
              <motion.div className="category-tabs" variants={headerVariants}>
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat}
                  </motion.button>
                ))}
              </motion.div>

              {/* Skills Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  className="skills-grid"
                  data-count={skills.length}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card skill-card--text"
                      variants={cardVariants}
                      whileHover={{
                        y: -8,
                        scale: 1.06,
                        boxShadow: "0 16px 40px rgba(108, 99, 255, 0.45)",
                        borderColor: "#6c63ff",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="skill-card-inner">
                        <div className="skill-emoji">{skill.icon}</div>
                        <h5>{skill.name}</h5>
                        <div className="skill-glow" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Decorative background"
      />
    </section>
  );
};
