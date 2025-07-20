// src/components/Footer.tsx
import React from "react";
import "../styles/style.css";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: "center", marginTop: "4rem", padding: "1rem", color: "whitesmoke" }}>
      <p>© {new Date().getFullYear()} Chinmaya Basavaraja</p>
      <p>
        🔗 
        <a href="https://www.linkedin.com/in/chinmaya-basavaraja/" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "whitesmoke", textDecoration: "underline" }}>
          LinkedIn
        </a> |
        <a href="https://github.com/kademanec" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "whitesmoke", textDecoration: "underline" }}>
          GitHub
        </a> |
        <a href="https://cosmic-dango-7698aa.netlify.app/" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "whitesmoke", textDecoration: "underline" }}>
          Portfolio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
