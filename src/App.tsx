import "./App.css";
import Equipment from "./components/Equipment";
import Expriences from "./components/Experiences";
import Hardskill from "./components/Hardskill";
import Image from "./components/Image";
import Section from "./components/Section";
import Skills from "./components/Skill";
import { skills, experiences } from "./core/datas";

function App() {
  console.log(experiences);

  return (
    <>
      <Section title="Julien Degermann : Fullstack Developer">
        <div className="flex">
          <Image />
          <Equipment />

          <div id="informations">
            <Expriences />
            <Skills />
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;
