import "./home.css";

function Home() {
    return (
      <div className="home__text">
          <div >
          <p>Hello, I’m</p>
          <h1 className="name">BAWANDEEP SINGH</h1>
          <p className="adjust">CREATIVE REACT DEVELOPER</p>

          <div className="home__CTA">
            <button>
              Download Resume
            </button>

          </div>
        </div>
        <div >
          <img className="home_img" src="./images/profile_pic.jpg"/>
        </div>
      </div>
    );
  }
  
  export default Home;
  