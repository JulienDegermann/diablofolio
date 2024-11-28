import { experiences } from "../../core/datas";
import ProjectCard from "./ProjectCard";

import "./style.css";

export default function Expriences() {
  return (
    <div id="experiences">
      <h3>Expériences</h3>
      <div className="flex">
        {experiences.map((experience, index) => (
          <ProjectCard key={index} project={experience} />
        ))}
      </div>
    </div>
  );
}
