import { equipments } from "../../core/datas";
import EquipmentItem from "./EquipmentItem";
import './style.css'

export default function Equipment() {
  return (
    <div id="set">
      <div id="items">
        {equipments.map((equipment, index) => (
          <EquipmentItem key={index} equipment={equipment} />
        ))}
      </div>
    </div>
  );
}
