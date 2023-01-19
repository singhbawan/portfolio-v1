import Logo from "../components/icons";
import "./skills.css";
import skillList from "../utils/skillsList";

function Skills() {
  return (
    <div className="skills_wrapper">
      
      <h1 className="skills_heading">Skills</h1>
     
      <div className="skills_container">
        <section className="skills_items">
          <h1 className="skills_subheading">Frontend</h1>
          {skillList.frontend.map((skill) => {
            return <Logo variant={skill} />;
          })}
        </section>
        <section className="skills_items">
          <h1 className="skills_subheading">Backend</h1>

          {skillList.backend.map((skill) => {
            return <Logo variant={skill} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Skills;
