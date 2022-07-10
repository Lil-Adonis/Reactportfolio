import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2021 & 2022",
    degree: "Internship",
    content:
      "After completing my frontend development program,I applied at ATC as an intern and i was able to work with their team",
    
  },
  {
    id: 2,
    year: "2021- Present",
    degree: "Software Engineer",
    content:
      "Frontend web development instructor at ATC. Assessed UX and UI designs for technical feasibility",
   
  },
  {
    id: 3,
    year: "2021 - present",
    degree: "Electrical & Electronic Engineering",
    content:
      "A student of University of Maiduguri where i currently study EEE to acquire my BEng Certificate.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
