import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArraow from "../../assets/rightArrow.png"

export const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore me</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-category">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={RightArraow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
