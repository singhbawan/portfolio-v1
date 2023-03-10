import Logo from "../components/icons";
import "./skills.css";
import skillList from "../utils/skillsList";

function Skills() {
  return (
    <div className="skills_wrapper">
      <div className="title_heading_container">
        <h1 className="title_heading">Skills</h1>
      </div>
      <div className="skills_container">
        <section className="skills_items">
          <h1 className="skills_subheading">Frontend</h1>
          {skillList.frontend.map((skill) => {
            return <Logo key={skill} variant={skill} />;
          })}
        </section>
        <section className="skills_items">
          <h1 className="skills_subheading">Backend</h1>

          {skillList.backend.map((skill) => {
            return <Logo key={skill} variant={skill} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Skills;
