import "./work.css";
import Logo from "../components/icons";

let projectData = [
  {
    name: "StarShip",
    description: "An app to visualize the market data",
    img: "starship.png",
    tech: ["react", "css", "mui", "javascript", "mui"],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
  },
  {
    name: "Join Us",
    description: "Lorem",
    img: "Join_Us.png",
    tech: ["react", "css", "mui", "javascript", "mui"],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
  },
  {
    name: "Pods and Parks",
    description: "Podcast",
    img: "podsandparks.png",
    tech: ["react", "css", "mui", "javascript", "mui"],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
  },
  {
    name: "Reactor",
    description: "An app to visualize the market data",
    img: "reactor.png",
    tech: ["react", "css", "mui", "javascript", "mui"],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
  },
];

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
              <div className="laptop_container">
                <img
                  className="asome"
                  src={`./images/My_work/${project.img}`}
                  alt={`screenshot of ${project.name}`}
                />
              </div>
              <div className="work_data_container">
                <h2 className="work_heading-h2">{project.name}</h2>
                <p className="work_p">{project.description} </p>

                {project.tech.map((icon) => {
                  return <Logo variant={icon} />;
                })}

                <div className="flex">
                  <a href={project.github} target="_blank">
                    <div className="btn">Github</div>
                  </a>
                  <a href={project.live} target="_blank">
                    <div className="btn">Live</div>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;
