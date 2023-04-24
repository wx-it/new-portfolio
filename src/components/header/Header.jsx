import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>My name is Zineb,</h1>
        <h1>I help startups build their website</h1>
        <p>
          I'm a Junior Frontend web Developer with so much passion for learning
          tech and all the newest technologies, always ready for a challenge and
          new projects, here to help and here to work. I'm currently working my
          way towards becoming a MERN stack developer.
        </p>
      </div>
        <div>
          <button>My Story</button>
          <button>See Work</button>
        </div>
    </div>
  );
};

export default Header;
