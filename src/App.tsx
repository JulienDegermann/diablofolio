import "./App.css";
import Equipment from "./components/Equipment";
import Expriences from "./components/Experiences";
import Section from "./components/Section";
import Skills from "./components/Skill";
import { experiences } from "./core/datas";

function App() {
  console.log(experiences);

  return (
    <>
      <Section title="Julien Degermann : Fullstack Developer">
        <div className="flex">
          {/* <Image /> */}
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
