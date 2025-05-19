import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAttendancePage = location.pathname === "/attendance";
  const isLoggedIn = !!localStorage.getItem("email");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.href = window.location.href;
  };

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-user-tie me-2"></i>Startup
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            {isLoggedIn && (
              <Link to="/attendance" className="nav-item nav-link">
                Attendance
              </Link>
            )}
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Services
            </Link>
            {localStorage.getItem('id') ? (<Link to="/task" className="nav-item nav-link">
              Task
            </Link>) : ("")}
            <div className="nav-item dropdown">
              <a
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/feature" className="dropdown-item">
                  Our features
                </Link> 
                <Link to="/team" className="dropdown-item">
                  Team Members
                </Link>
                {localStorage.getItem('id') ? (<Link to="/profile" className="dropdown-item">
                  Profile
                </Link>) : ("")}
                {!localStorage.getItem('id') ? (<Link to="/login" className="dropdown-item">
                  Login
                </Link>) : <Link onClick={logout} className="dropdown-item">
                  Logout
                </Link>}
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            <hr />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
