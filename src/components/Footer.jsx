import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
          
            <div className="col-lg-3 col-sm-6 text-center">
              <h3 className="logo-footer">YOUR LOGO <br />HERE</h3>

              <h6>Phone Number:</h6>
              <h5 className="mb-4">+977-9861859764</h5>

              <h6>Location:</h6>
              <h5>Tahachal-Kathmandu</h5>
            </div>
          
            <div className="col-lg-3 col-sm-6 text-center">
              <p className="text-justify">
                "City Pet House & Animal Clinic: Quality
                and affordable animal care at your 
                doorstep. Comprehensive, professional,
                and compassionate Veterinary services
                by our dedicated and experienced team."
              </p>
            </div>
            
            <div className="col-lg-3 col-sm-6 text-center">
              <h6>Menu</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="#">Breeds</Link>
                </li>
                <li>
                  <Link to="#">Shop</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="p-3" id="footer">
            Copyright <i className="fa-regular fa-copyright"></i> 2023 City Pet House & Animal Clinic | All Rights Reserved
            
          </div>
          
         <div className="footer-icon">
            <i className="fa-brands fa-facebook me-2"></i>
            <i className="fa-brands fa-twitter me-2"></i>
            <i className="fa-brands fa-instagram me-2"></i>
            <i className="fa-brands fa-linkedin me-2"></i>
            <i className="fa-brands fa-youtube"></i>
         </div>
          
        </div>
      </footer>
      ;
    </>
  );
};
