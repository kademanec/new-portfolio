// src/components/Hero.tsx
import React from "react";
import "../styles/style.css";

const Hero: React.FC = () => {
  return (
    <div className="description">
      <div className="typewriter">
        <h1>Hello, I'm Chinmaya. I write Code...</h1>
      </div>
      <div className="aboutme">
        <p>
          "I started my coding journey from scratch, with no prior experience — just a strong desire to learn. JavaScript became my gateway, teaching me that growth in tech is all about curiosity, consistency, and the courage to keep building."


        </p>
      </div>
    </div>
  );
};

export default Hero;
