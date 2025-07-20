// src/components/Skills.tsx
import React from "react";
import "../styles/style.css";

const Skills: React.FC = () => {
  return (
    <div className="myskill-sets">
      <h2>Technical Skills</h2>
      <ul className="skills">
        <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, HTML, CSS</li>
        <li><strong>Frameworks & Libraries:</strong> React.js, React Native, Redux, Django</li>
        <li><strong>API Technologies:</strong> GraphQL, REST</li>
        <li><strong>Development Tools:</strong> Visual Studio Code</li>
        <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
      </ul>
    </div>
  );
};

export default Skills;
