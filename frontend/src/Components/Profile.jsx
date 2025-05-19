import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
const userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Profile</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/profile" className="h5 text-white">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card p-5">
          <div className="row">
            <div className="col-4">
              <img
                src={`http://localhost:5001/${userDetails.Photo}`}
                height="450px"
                width="100%"
              />
            </div>
            <div className="col-8">
              <div className="row">
                <h2 className="text-primary">Personal Detail</h2>
                <hr />
                <div className="col-4">
                  <div>
                    {" "}
                    First Name : <span className="text-primary">{userDetails.FirstName}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    Last Name : <span className="text-primary">{userDetails.LastName}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    Email : <span className="text-primary">{userDetails.Email}</span>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-4">
                  <div>
                    {" "}
                    Password : <span className="text-primary">{userDetails.Password}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    NUmber : <span className="text-primary">{userDetails.Number}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    Address :{" "}
                    <span className="text-primary">
                    {userDetails.Address}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <h2 className="text-primary">Company Detail</h2>
                <hr />
                <div className="col-4">
                  <div>
                    {" "}
                    Bank Account Number :{" "}
                    <span className="text-primary">{userDetails.BankAccountNumber}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    PF Number : <span className="text-primary">{userDetails.PFNumber}</span>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    Joining : <span className="text-primary">{userDetails.JoiningDate}</span>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <div>
                    {" "}
                    Technology : <span className="text-primary">{userDetails.Position}</span>&nbsp;
                    <span className="text-primary">{userDetails.Technology}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
