import axios from "axios";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import TaskBox from "../Container/TaskBox";
import React, { useEffect, useState } from "react";
const Swal = require("sweetalert2");
const Contact = () => {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Message, setMessage] = React.useState("");
  const [Subject,setSubject] = React.useState("");
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (Name === "" || Subject === "" ||Email === "" ||  Message === "") {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    // console.log(userData);
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email",Email);
    formData.append("Message", Message);
    formData.append("subject", Subject);
    
    const AddUserUrl = `http://localhost:5001/add/contactus`;
    axios
      .post(AddUserUrl, formData, {
        headers: {
          Accept: "auth",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          Swal.fire({
            icon: "success",
            title: "Request Sent  successfully",
            showConfirmButton: true,
          });  
          window.location.href=window.location.href;
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data.message,
          showConfirmButton: true,
        });
      });
  };
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Contact Us
              </h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/contact" className="h5 text-white">
                Contact
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
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h4 className="text-primary mb-0">info@example.com</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h4 className="text-primary mb-0">
                    123 Street, Abc State, india
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form onSubmit={handleSubmitClick}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      value={Name}
                  onChange={(e) => setName(e.target.value)}

                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={Email}
                  onChange={(e) => setEmail(e.target.value)}

/>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                      value={Subject}
                  onChange={(e) => setSubject(e.target.value)}

                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 bg-light px-4 py-3"
                      rows="4"
                      placeholder="Message"
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}

                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=india+(Your%20Business%20Name)&amp;t=p&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
