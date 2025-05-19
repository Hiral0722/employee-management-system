import React from "react";

const ServicesBox = ({ title, description }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <div className="service-icon">
            <i className="fa fa-shield-alt text-white"></i>
          </div>
          <h4 className="mb-3">{title}</h4>
          <p className="m-0">{description}</p>
          <a className="btn btn-lg btn-primary rounded" href="">
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServicesBox;
