import "./work.css";

function Work() {
  return (
    <div className="work_wrapper">
      <div className="work_heading_container">
      <h1 className="work_heading">Portfolio</h1>
      </div>
      <ul>
        <li className="project_wrapper">
          <div className="laptop_container">
          <img className="asome" src="./images/My_work/starship.png" alt="" />
          </div>
          <div className="work_data_container">
            <h2>Starship</h2>
            <p>An app to visualize the market data </p>
            <ul>
              <li>techs</li>
              <li>nosql</li>
              <li>mui</li>
            </ul>
            <div className="flex">
            <div className="btn">Github</div>
            <div className="btn">Live</div>
            </div>
          </div>
        </li>
        <li className="project_wrapper">
          <div className="laptop_container">
            <img className="asome" src="./images/My_work/Join_Us.png" alt="" />
          </div>
          <div className="work_data_container">
            <h2>project name</h2>
            <p>description</p>
            <ol>
              <li>techs</li>
              <li>nosql</li>
              <li>mui</li>
            </ol>
          </div>
        </li>
        <li className="project_wrapper">
          <div className="laptop_container">
            <img className="asome" src="./images/My_work/podsandparks.png" alt="" />
           
          </div>
          <div className="work_data_container">
            <h2>project name</h2>
            <p>description</p>
            <ol>
              <li>techs</li>
              <li>nosql</li>
              <li>mui</li>
            </ol>
          </div>
        </li>
        <li className="project_wrapper">
          <div className="laptop_container">
            <img className="asome" src="./images/My_work/reactor.png" alt="" />
          </div>
          <div className="work_data_container">
            <h2>project name</h2>
            <p>description</p>
            <ol>
              <li>techs</li>
              <li>nosql</li>
              <li>mui</li>
            </ol>
          </div>
        </li>
        <li className="project_wrapper">
          <div className="laptop_container">
            <img className="asome" src="./images/My_work/portfolio.png" alt="" />
          </div>
          <div className="work_data_container">
            <h2>project name</h2>
            <p>description</p>
            <ol>
              <li>techs</li>
              <li>nosql</li>
              <li>mui</li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
