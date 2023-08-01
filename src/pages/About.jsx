import React from 'react';

export const About = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
          <div className="col-12 p-0">
            <img className="img-fluid w-100" src="dogg2.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row px-3">
            <h1 className="display-4 mb-4" id="about-head">About Us</h1>
            <h5 className="text-muted mb-3" id="about-text">
              Pet House & Animal clinic was established with
              moto to provide qualitative and affordable animal
              healthcare service to your doorstep.
            </h5>
            <ul className="list-inline mt-5">
              <li>
                <h5 className="text-muted">
                <i className="fa-regular fa-circle-check me-2" id="about-icon"></i>Comprehensive
                </h5>
              </li>
              <li>
                <h5 className="text-muted">
                <i className="fa-regular fa-circle-check me-2" id="about-icon"></i>
                    Professional
                </h5>
              </li>
              <li>
                <h5 className="text-muted">
                <i className="fa-regular fa-circle-check me-2" id="about-icon"></i>
                  Compassionate veterinary service
                </h5>
              </li>
            </ul>
            <a href="#" className="btn btn-lg btn-primary mt-3 me-3 px-4" id="about-btn">
              Contact <i className="fa-solid fa-circle-chevron-right ms-3"></i>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};
