import React from "react";
import SectionTitle from "../SectionTitle.jsx";
import SingleSkill from "./SingleSkill.jsx";
import "../../css/home-page/skills-section.css";

function SkillsSection() {
  return (
    <div className="mp mp-fit mp-color-5">
      <div className="imp imp-flex high-imp mp-txt-color-2 skills-container">
        <SectionTitle
          mainTitle="Yeah, I've Got Skills"
          subTitle="Technical Skill Set"
        />
        <SingleSkill skillName="HTML 5" skillLevel={3} />
        <SingleSkill skillName="CSS 3" skillLevel={3} />
        <SingleSkill skillName="JavaScript" skillLevel={3} />
        <SingleSkill skillName="React" skillLevel={3} />
        <SingleSkill skillName="Node.js" skillLevel={2} />
        <SingleSkill skillName="Python" skillLevel={4} />
        <SingleSkill skillName="Java" skillLevel={4} />
        <SingleSkill skillName="VB.NET" skillLevel={4} />
        <SingleSkill skillName="C Programming" skillLevel={2} />
        <SingleSkill skillName="SQL" skillLevel={3} />
        <div className="skills-divider"></div>
        <SingleSkill skillName="Git/GitHub" skillLevel={3} />
        <SingleSkill skillName="VS Code" skillLevel={4} />
        <SingleSkill skillName="Visual Studio" skillLevel={4} />
        <SingleSkill skillName="SSMS" skillLevel={3} />
        <SingleSkill skillName="Microsoft Office" skillLevel={5} />
        <SingleSkill skillName="XAMPP" skillLevel={2} />
        <SingleSkill skillName="Figma" skillLevel={2} />
        <SingleSkill skillName="ES6: Skyrim" skillLevel={5} />
      </div>
    </div>
  );
}

export default SkillsSection;