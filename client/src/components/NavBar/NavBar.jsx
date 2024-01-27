import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/players">Players</NavLink>
        </li>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/projections">Projections</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
