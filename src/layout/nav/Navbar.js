import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
    <div >
    {/* <img src="./images/LOGO-4.png" alt="logo"></img> */}
    <nav className="wrapper">
      <NavLink
        to="/portfolio-v1/"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/portfolio-v1/about"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio-v1/work"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Work
      </NavLink>
      <NavLink
        to="/portfolio-v1/skills"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Skills
      </NavLink>
      <NavLink
        to="/portfolio-v1/contact"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Contact
      </NavLink>
      
      {/* <button>resume</button> */}
      </nav>
      </div>
    </>
  );
}

export default Navbar;
