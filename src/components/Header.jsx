import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink
            className={`${({ isActive }) =>
              isActive ? "activeLink" : ""} navbar-brand`}
            to="/"
          >
            <i className="fas fa-film mr-2"></i>
            Catalog
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  className={`${({ isActive }) =>
                    isActive ? "active" : ""} nav-link nav-link-1`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  className={`${({ isActive }) =>
                    isActive ? "active" : ""} nav-link nav-link-2`}
                  to="/videos"
                >
                  Videos
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className={`${({ isActive }) =>
                    isActive ? "active" : ""} nav-link nav-link-3`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className={`${({ isActive }) =>
                    isActive ? "active" : ""} nav-link nav-link-4`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="tm-hero d-flex justify-content-center align-items-center"
        data-parallax="scroll"
        data-image-src="img/hero.jpg"
      >
        <form class="d-flex tm-search-form">
          <input
            className="form-control tm-search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success tm-search-btn"
            type="submit"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
