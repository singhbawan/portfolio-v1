import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        about
      </NavLink>
      <Link to="/contact" className="link">
        hello
      </Link>
    </>
  );
}

export default Navbar;
