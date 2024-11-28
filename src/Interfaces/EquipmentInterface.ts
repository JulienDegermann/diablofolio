import { EquipmentPlace, EquipmentType, SetName  } from "../core/datas"

export default interface EquipmentInterface {
    type: EquipmentType,
    setName?: SetName,
    name: string,
    place: EquipmentPlace
    description: string
}