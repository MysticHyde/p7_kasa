import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }>Accueil</NavLink>
        </li>
        <li>
          <NavLink to={`about`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }>A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
