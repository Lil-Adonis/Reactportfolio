import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Detail-oriented,organized and meticulous. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success",
  progressData: [
    {
      id: 1,
      name: "Teamwork",
      percentage: 85,
    },
    {
      id: 2,
      name: "Problem solving",
      percentage: 90,
    },
    {
      id: 3,
      name: "Communication skill",
      percentage: 60,
    },
    {
      id: 4,
      name: "Presentation skill",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
