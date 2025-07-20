import React, { useState, useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "aos/dist/aos.css";



const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container">
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          backgroundColor: darkMode ? "#fff" : "#222",
          color: darkMode ? "#222" : "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
};

export default App;
