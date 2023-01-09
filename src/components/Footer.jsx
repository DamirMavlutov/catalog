import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="container-fluid tm-container-small">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
              <h3 className="tm-text-primary mb-4 tm-footer-title">
                About Catalog
              </h3>
              <p>
                Catalog is free Bootstrap 5 Alpha 2 HTML Template for video and
                photo websites. You can freely use this TemplateMo layout for a
                front-end integration with any kind of CMS website.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <h3 className="tm-text-primary mb-4 tm-footer-title">
                Our Links
              </h3>
              <ul className="tm-footer-links pl-0">
                <li>
                  <NavLink to="#">Advertise</NavLink>
                </li>
                <li>
                  <NavLink to="#">Support</NavLink>
                </li>
                <li>
                  <NavLink to="#"> Our Company</NavLink>
                </li>
                <li>
                  <NavLink to="#">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                <li className="mb-2">
                  <NavLink to="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="https://pinterest.com">
                    <i className="fab fa-pinterest"></i>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="https://facebook.com">
                    <i className="fab fa-facebook"></i>
                  </NavLink>
                </li>
              </ul>
              <NavLink
                to="#"
                className="tm-text-gray text-right d-block mb-2"
              >
                Terms of Use
              </NavLink>
              <NavLink
                to="#"
                className="tm-text-gray text-right d-block"
              >
                Privacy Policy
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
              Copyright 2020 Catalog Company. All rights reserved.
            </div>
            <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
              Desigined by
              <NavLink
                to="https://templatemo.com"
                className="tm-text-gray"
                rel="sponsored"
                target="_parent"
              >
                TamplateMo
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
