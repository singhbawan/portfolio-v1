import "./home.css";
import BawandeepResume from "../assets/myResume.pdf";

function Home() {
  return (
    <div className="home__wrapper">
      <div className="mr-10">
        <p className="home_subtext">Hello, I’m</p>
        <h1 className="home_text"><img className="home_text_B" src="/portfolio-v1/LOGO-4.png" alt="B"></img>AWANDEEP SINGH</h1>
        <p className="home_subtext">CREATIVE FULL STACK DEVELOPER</p>
        <p className="home_subtext">BASED IN TORONTO</p>
          <a href={BawandeepResume} download="Bawandeep Resume">
            <button className="btn">Download Resume</button>
          </a>
      </div>

      <div className="ml-10">
        <div className="home_img_Container">
          <img
            className="home_img_circle"
            src="/portfolio-v1/images/flower_back.jpg"
            alt=""
          />
          <img
            className="home_img_person"
            src="/portfolio-v1/images/Bawandeep_Singh.PNG"
            alt="Bawandeep Smiling"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
