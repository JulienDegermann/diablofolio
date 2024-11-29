
import { HardSkills } from '../../../core/datas';
import './style.css';

export default function Hardskill({
  hardskill,
}: {
  hardskill: HardSkills
}) {
  return (
    <div className={"hardSkill"}>
      <img src={`public/icons/${hardskill}.svg`} alt={hardskill} />
      <h3 className="skillName">{hardskill}</h3>
    </div>
  );
}
