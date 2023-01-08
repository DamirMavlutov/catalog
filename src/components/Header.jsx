import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink
          className={`${({ isActive }) =>
            isActive ? "activeLink" : "link"} navbar-brand`}
          to="/"
        >
          <i className="fas fa-film mr-2"></i>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
