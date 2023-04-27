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
          I'm a Junior Frontend web Developer with so much passion. always ready
          for a challenge and new projects, here to help and here to work. I'm
          currently working my way towards becoming a MERN stack developer.
        </p>
        <p>
          I'm a Junior Frontend web Developer with so much passion for learning
          tech and all the newest technologies
        </p>
        <p>
          I'm a Junior Frontend web Developer with so much passion for learning
          tech and all the newest technologies, always ready for a challenge and
          new projects, here to help and here to work.
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
