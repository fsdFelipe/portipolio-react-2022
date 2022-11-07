import SkillsData from "../Settings/SkillsData";
import "../Styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills container">
      <h1>Skills</h1>
      <div className="skills">
        {SkillsData.map((item, index) => (
          <div className="skill" key={index}>
            <i> {item.icon} </i>
            <h5> {item.name} </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
