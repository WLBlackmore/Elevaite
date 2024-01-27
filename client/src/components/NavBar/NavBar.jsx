import {NavLink} from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {

    return (
        <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            Players
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Projections
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar