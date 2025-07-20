// src/components/Navbar.tsx
import React from "react";
import "../styles/style.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul className="list-items">
        <li className="list-item"><a href="#">Home</a></li>
        <li className="list-item"><a href="https://findcoder.io/u/chinmaya">About Me</a></li>
        <li className="list-item"><a href="https://findcoder.io/u/chinmaya">Projects</a></li>
        <li className="list-item"><a href="https://github.com/kademanec">GitHub</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
