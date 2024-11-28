import ProjectInterface from "../../Interfaces/ProjectInterface";
import "./style.css";

export default function ProjectCard({project}: {project: ProjectInterface}) {
  return (
    <div className="projectCard">
      <img src={`./images/${project.image}`} alt="" />
      <div className="description">
        <h3 className="projectTitle">{project.name}</h3>
        <p className="projectDescription">{project.description}</p>
        <p className="projectStack">[{project.stacks.join(", ")}]</p>
        <a href={project.link}>plus d'infos</a>
      </div>
    </div>
  );
}
