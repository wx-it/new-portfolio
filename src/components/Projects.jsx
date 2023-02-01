import GrayLink from "../assets/gray-link.svg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>

      <div className="projects--cards">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 0.5 }}
          className="projects--card"
        >
          <div className="link">
            <p>React</p>
            <a href="">
              <img src={GrayLink} alt="" />
            </a>
          </div>
          <h2>Quizzical</h2>
          <p>a quiz app made with React and quiz API.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 0.75 }}
          className="projects--card"
        >
          <div className="link">
            <p>React</p>
            <a href="">
              <img src={GrayLink} alt="" />
            </a>
          </div>
          <h2>Quizzical</h2>
          <p>a quiz app made with React and quiz API.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          className="projects--card"
        >
          <div className="link">
            <p>React</p>
            <a href="">
              <img src={GrayLink} alt="" />
            </a>
          </div>
          <h2>Quizzical</h2>
          <p>a quiz app made with React and quiz API.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
