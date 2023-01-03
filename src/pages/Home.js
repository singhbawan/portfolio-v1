import "./home.css";
import myResume from "../assets/myResume.pdf";

function Home() {
  return (
    <div className="home__wrapper">
      <div>
        <p className="home_subtext">Hello, I’m</p>
        <h1 className="home_text">BAWANDEEP SINGH</h1>
        <p className="home_subtext">CREATIVE REACT DEVELOPER</p>
        <p className="home_subtext">BASED IN TORONTO</p>

        <div>
        <a href={myResume} download="Bawandeep Resume">
          <button className="btn">Download Resume</button>
 </a>
        </div>
      </div>

      <div >
        <div className="home_img_Container">
          <img className="home_img_circle" src="./images/flower_back.jpg" alt="" />
          <img className="home_img_person" src="./images/Bawandeep_Singh.PNG" alt="Bawandeep Smiling" />
        </div>
      </div>
    </div>
  );
}

export default Home;
