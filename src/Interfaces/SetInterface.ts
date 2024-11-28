import EquipmentInterface from "./EquipmentInterface";
import BonusInterface from "./BonusInterface";

export default interface SetInterface {
    setName: string,
    setEquipments: EquipmentInterface[],
    description: string,
    bonus: BonusInterface[]

}
