import "./work.css";
import Logo from "../components/icons";

let projectData = [
  {
    name: "StarShip",
    description:
      "An app to visualize the market data with a social page to post baskets",
    img: "starship.png",
    tech: [
      "javascript",
      "react",
      "mongodb",
      "express",
      "mui",
      "node",
      "graphql",
      "heroku",
      "figma",
      "stripe",
    ],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
    figma:
      "https://www.figma.com/file/21tkx8YyIjDWSJVLL1ySAh/Project-3?node-id=0%3A1&t=4XpdqnB78pVRmX6A-0",
  },
  {
    name: "Join Us",
    description:
      "This app allows users to post event they are hosting and see the attendees and their comments.",
    img: "Join_Us.png",
    tech: [
      "handlebars",
      "tailwind",
      "node",
      "express",
      "javascript",
      "mysql",
      "sequelize",
      "jest",
      "mvc",
      "heroku",
      "figma",
    ],
    github: "https://github.com/nab-man/Join-Us",
    live: "https://join-us2.herokuapp.com/dashboard",
    figma:
      "https://www.figma.com/file/LkWZG25MkJjkwAXnxfipno/Project-2?node-id=0%3A1&t=2wVCRmQk9brvcCpE-1",
  },
  {
    name: "Reactor",
    description: "These are small games that I made to learn more about react ",
    img: "reactor.png",
    tech: ["react", "css", "javascript", "githubpages", "html"],
    github: "https://github.com/singhbawan/reactor",
    live: "https://singhbawan.github.io/reactor/",
  },
  {
    name: "Portfolio",
    description: "The portfolio website that you are visiting.",
    img: "portfolio.png",
    tech: ["html", "css", "javascript", "react"],
    github: "https://github.com/FOR-TIMI/Starship",
    live: "https://still-cliffs-68409.herokuapp.com",
  },
  {
    name: "Pods and Parks",
    // description: "Podcast",
    img: "podsandparks.png",
    tech: ["react", "css", "bulma", "javascript"],
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
                  className="work_project_img"
                  src={`./images/My_work/${project.img}`}
                  alt={`screenshot of ${project.name}`}
                />
                
              </div>
              <div className="work_data_container">
                <h2 className="work_project_heading mb-1">{project.name}</h2>
                <p className="work_project_para mb-1 ">{project.description} </p>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;
