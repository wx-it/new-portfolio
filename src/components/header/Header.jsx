import React from "react";
import "./header.css";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>My name is Zineb, I help startups build their website. </h1>
        <p>
          Hey there! 👋 I'm Zineb, a passionate web developer with a focus on
          front-end development. I specialize in using HTML, CSS, and JavaScript
          to create dynamic and user-friendly websites. I'm also proficient in
          ReactJS, SCSS, TailwindCSS, and Figma.
        </p>
        <p>
          My journey into web development started when I taught myself the
          basics of HTML, CSS, and JavaScript. Since then, I've been expanding
          my knowledge through online courses, tutorials, and practice projects.
          I believe that every project, no matter how small, is an opportunity
          to hone my skills and push myself to be better.
        </p>
        <p>
          When it comes to building websites, I'm a firm believer in
          user-centric design and accessibility. I strive to create experiences
          that are both visually appealing and easy to use for all users.
          Whether it's designing a responsive layout or implementing a new
          feature, I'm always up for a challenge.
        </p>
        <p>
          Thanks for stopping by my portfolio! Feel free to check out some of my
          projects and don't hesitate to reach out if you have any questions or
          opportunities to collaborate. Let's create something awesome together!
          🚀
        </p>
      </div>

      <div className="links">
        <a target="blank" href="https://twitter.com/obv_12">
          <AiOutlineTwitter />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/zineb-bendjafer/">
          <AiFillLinkedin />
        </a>
        <a target="blank" href="https://github.com/wx-it">
          <AiOutlineGithub />
        </a>
        <button>
          <a href="mailto:bendjafer.zineb70@gmail.com">Email me</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
