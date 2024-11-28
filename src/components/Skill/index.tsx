import { skills } from "../../core/datas";
import Hardskill from "./Hardskill";
import "./style.css";

export default function Skills() {
  return (
    <div id="skills">
      <h3>Compétences</h3>
      <div className="flex" id={"hardSkills"}>
        {Object.values(skills.HardSkills).map((skill, index) => (
          <Hardskill key={index} hardskill={skill} />
        ))}
      </div>
      <div className="flex" id={"softSkills"}>
        {skills.SoftSkills.map((softskills, index) => (
          <div key={index} className={"softSkills"}>
            <h3>{softskills}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
