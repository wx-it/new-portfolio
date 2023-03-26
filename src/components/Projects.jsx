import GrayLink from "../assets/gray-link.svg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>

      <div className="projects--cards">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          className="projects--card"
        >
          <div className="link">
            <p>React</p>
            <a target={"_blank"} href="http://news-homepage-wxit.vercel.app/">
              <img src={GrayLink} alt="" />
            </a>
          </div>
          <h2>News Homepage</h2>
          <p>a one page news homepage build using Reactjs and CSS</p>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
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
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 4,
            },
          }}
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
