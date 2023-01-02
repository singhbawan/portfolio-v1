import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
    <div >
    {/* <img src="./images/LOGO-4.png" alt="logo"></img> */}
    <nav className="wrapper">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Work
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        Skills
      </NavLink>
      <NavLink
        to="/contact"
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
