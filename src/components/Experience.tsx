// src/components/Experience.tsx
import React from "react";
import "../styles/style.css";

const Experience: React.FC = () => {
  return (
    <div className="work-experience">
      <h2>Professional Experience</h2>

      <div className="work-item">
        <h3>Altimetrik – Software Engineer</h3>
        <p>Nov 2022 – Present (Deployed to Western Union Project)</p>
        <ul>
          <li>Architect and develop cross-platform applications using React.js, React Native, and TypeScript.</li>
          <li>Led front-end architecture with focus on scalability, reusability, and performance.</li>
          <li>Implemented state management using Redux Toolkit and React Context API.</li>
          <li>Integrated and optimized GraphQL and RESTful APIs with Apollo Client and Axios.</li>
          <li>Collaborated with UI/UX teams for responsive, accessible designs.</li>
          <li>Used React DevTools, profilers, and debugging libraries for performance monitoring.</li>
          <li>Mentored junior developers and enforced engineering best practices.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>Trigent Software Solutions Pvt Ltd – Software Engineer</h3>
        <p>May 2021 – Aug 2022 (Deployed to Accenture – Project S4M Media)</p>
        <ul>
          <li>Worked on Paid Media Hub project using React.js and JavaScript.</li>
          <li>Developed scalable UI components and enhanced existing features.</li>
          <li>Collaborated with teams to meet business and technical requirements.</li>
          <li>Implemented unit testing and delivered high-quality, functional code.</li>
          <li>Improved code maintainability and performance through optimization.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>CampK12 – Software Engineer & Instructor</h3>
        <p>June 2020 – April 2021</p>
        <ul>
          <li>Delivered live coding sessions in JavaScript, Python, HTML, and CSS.</li>
          <li>Designed project-based modules and debugged student assignments.</li>
          <li>Improved personal skills through curriculum development and hands-on teaching.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>CIOC FMCG Pvt Ltd – Software Engineer</h3>
        <p>April 2019 – Jan 2020</p>
        <ul>
          <li>Built an ERP web application using Python (Django) and JavaScript.</li>
          <li>Created background animations using FabricJS and CanvasJS.</li>
          <li>Focused on reusable backend modules and clean frontend logic.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
