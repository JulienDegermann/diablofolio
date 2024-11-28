

import { sets } from "../../../core/datas";
import EquipmentInterface from "../../../Interfaces/EquipmentInterface";
import "./style.css";
// import DefaultImage from "/public/images/hero.webp";

export default function EquipmentItem({
  equipment,
}: {
  equipment: EquipmentInterface;
}) {
  const set = sets.find((set) => set.name === equipment.setName);
  return (
    <div id={equipment.place} className={`${equipment.type} setItem`}>
      {/* <img src="./images/hero.jpeg" alt="image de l'équipement" /> */}
      <img
        src={`./images/${equipment.place}.webp`}
        alt="image de l'équipement"
      />
      <div className="description">
        <h2 className={"equipmentName"}>{equipment.name}</h2>
        <p>{equipment.description}</p>

        {equipment.type === "set" && (
          <>
            <p>Bonus :</p>

            {set?.bonus.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
