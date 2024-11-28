import { HardSkills } from "../core/datas";

export default interface ProjectInterface {
    name: string,
    description: string,
    stacks: HardSkills[],
    image: string,
    link: string
}