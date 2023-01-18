import "./work.css";
import Logo from "../components/icons";
import projectData from "../utils/projectData";



function Work() {
  return (
    <div className="work_wrapper">
      <div className="work_heading_container">
        <h1 className="work_heading">Portfolio</h1>
      </div>
      <ul>
        {projectData.map((project) => {
          return (
            <li className="project_wrapper" key={project.name}>
              <input
                className="work_checkbox"
                type="checkbox"
                name="checkbox"
                id={project.name}
                value="value"          
              ></input>
              <label className="work_label-arrow cursor-pointer" for={project.name}>               
                <img
                 
                  height={75}
                  src="/portfolio-v1/images/arrow_down.svg"
                ></img>
              </label>
              
              <div className="laptop_container">
                <img
                  className="work_project_img"
                  src={`/portfolio-v1/images/My_work/${project.img}`}
                  alt={`screenshot of ${project.name}`}
                />
              </div>

              <div className="work_data_container">
                <h2 className="work_project_heading mb-1">{project.name}</h2>
                <p className="work_project_para mb-1 ">
                  {project.description}{" "}
                </p>
                <div className="flex mb-1 ">
                  {project.tech.map((icon) => {
                    return <Logo variant={icon} height={25} />;
                  })}
                </div>
                <div className="flex mb-1 work_project_links">
                  <a href={project.github} target="_blank">
                    <div className="btn">Github</div>
                  </a>
                  <a href={project.live} target="_blank">
                    <div className="btn">Live</div>
                  </a>
                  {project.figma ? (
                    <a href={project.figma} target="_blank">
                      <div className="btn ">Figma</div>
                    </a>
                  ) : null}
                </div>
              </div>
              <label className="work_label-heading cursor-pointer" for={project.name}> 
              <p className="work_project_heading ">{project.name}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;
