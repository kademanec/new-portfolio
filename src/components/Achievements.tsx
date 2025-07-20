// src/components/Achievements.tsx
import React from "react";
import "../styles/style.css";

const Achievements: React.FC = () => {
  return (
    <div className="achievements">
      <h2>Achievements and Recognitions</h2>
      <ul className="Aa">
        <li>🌟 <strong>Rise and Shine Award</strong> – Earned in Dec 2024 for consistent high performance and exceeding delivery expectations.</li>
        <li>🏆 <strong>Standing Ovation Award</strong> – Awarded in Dec 2023 for excellence in team contribution and delivery.</li>
        <li>👏 <strong>Pat on the Back Award</strong> – Received in Dec 2023 for meeting critical project deadlines and collaborative efforts.</li>
        <li>🏅 Participation certificate in "Smart India Hackathon 2017" – World's biggest digital movement.</li>
        <li>📜 ICTRCET 2018 participation – in association with IEEE, Bengaluru.</li>
        <li>🧪 Project funding by Karnataka State Council of Science & Technology as recognition of innovation.</li>
      </ul>
    </div>
  );
};

export default Achievements;
