import React from "react";
import { Link } from "react-router-dom";
import ServicesBox from "../Container/ServicesBox";
const Service = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Services</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/service" className="h5 text-white">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1>
          </div>
          <div className="row g-5">
            <ServicesBox
              title={"Cyber Security"}
              description={
                "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
              }
            />
            <ServicesBox
              title={"Data Analytics"}
              description={
                "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
              }
            />
            <ServicesBox
              title={"Web Development"}
              description={
                "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
              }
            />
            <ServicesBox
              title={"Apps Development"}
              description={
                "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
              }
            />
            <ServicesBox
              title={"SEO Optimization"}
              description={
                "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
              }
            />

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero dolorum eius corporis esse minima non deleniti nostrum
                  assumenda aliquam qui doloribus facere in, iste sapiente minus
                  accusamus exercitationem beatae soluta.
                </p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
