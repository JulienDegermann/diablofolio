import "./App.css";
import EquipmentItem from "./components/EquipmentItem";
import Section from "./components/Section";
import { skills, equipments } from "./core/datas";

function App() {
  console.log(equipments);
  equipments.map((equipment) => {
    console.log(equipment);
  });

  return (
    <>
      <Section title="Julien Degermann : Fullstack Developer">
        <div className="flex">
          <div id="image">
            <img src="vite.svg" alt="mon image ici" />
          </div>
          <div id="set">
            <div id="items">
              {equipments.map((equipment, index) => (
                <EquipmentItem key={index} equipment={equipment} />
              ))}
            </div>

            <div id="skills">
              <h3>Compétences</h3>
              <div className="flex" id={"hardSkills"}>
                {skills.hardskills.map((skills, index) => (
                  <div key={index} className={"hardSkills"}>
                    <h3>{skills.join(",   ")}</h3>
                  </div>
                ))}
              </div>
              <div className="flex" id={"softSkills"}>
                {skills.softskills.map((softskills, index) => (
                  <div key={index} className={"softSkills"}>
                    <h3>{softskills}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;
