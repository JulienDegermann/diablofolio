import SoftSkillInterface from "../../../Interfaces/SoftSkillInterface";
import "./style.css";

export default function Softskill({softskill}: {softskill: SoftSkillInterface}) {
  console.log(softskill.image); 
  return (
    <div className={"softSkill"}>
      {/* <img src={`public/images/${softskill}.webp`} alt={softskill} /> */}
      <img src={`public/icons/${softskill.image}`} alt={softskill.name} />
      <h3>{softskill.name}</h3>
    </div>
  );
}
