import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div>Logo</div>
      <button onClick={toggleNav} className="toggleNavBtn">toggle</button>
      <nav className={toggle ? "toggle-nav" : "hide-nav"}>
        <div>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
        <button>Resume</button>
      </nav>
    </header>
  );
};

export default Navbar;
