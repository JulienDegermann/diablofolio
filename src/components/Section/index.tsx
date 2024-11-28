import SectionInterface from "../../Interfaces/SectionInterface";
import "./styles.css";

export default function Section({ children, title }: SectionInterface) {
  return (
    <section>
      <h2 className={"sectionTitle"}>{title}</h2>
      <div className="container">{children}</div>
    </section>
  );
}
