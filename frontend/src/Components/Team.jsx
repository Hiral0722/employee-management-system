import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TeamMemberBox from "../Container/TeamMemberBox";
import axios from "axios";
const Swal = require("sweetalert2");

const Team = () => {
  const navigate = useNavigate()
  const [FirstName, setFirstname] = React.useState("");
  const [LastName, setLastname] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Number, setNumber] = React.useState("");
  const [Technology, setTechnology] = React.useState("");
  const [Position, setPosition] = React.useState("");
  const [JoiningDate, setJoiningDate] = React.useState("");
  const [BankAccountNumber, setBankAccountNumber] = React.useState("");
  const [PFNumber, setPFNumber] = React.useState("");
  const [CIFNumber, setCIFNumber] = React.useState("");
  const [Salary, setSalary] = React.useState("");
  const [Image, setImage] = React.useState({
    file: [],
  });
  const [files, setFiles] = React.useState([]);
  const handleimginput = (e) => {
    setImage({
      ...Image,
      file: e.target.files,
      // filepreview: URL.createObjectURL(e.target.files[0]),
    });
    setFiles(e.target.files);
    
  };
  const HandleSignup = (e) => {
    e.preventDefault();
    if (
      FirstName === "" ||
      LastName === "" ||
      Email === ""||
      Password === ""||
      Address === ""||
      Number === ""||
      Technology === ""||
      Position === ""||
      JoiningDate === ""||
      BankAccountNumber === ""||
      PFNumber === ""||
      CIFNumber === ""||
      Salary === ""||
      files.length<=0  
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("LastName", LastName);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("Address", Address);
    formData.append("Number", Number);
    formData.append("Technology", Technology);
    formData.append("Position", Position);
    formData.append("JoiningDate", JoiningDate);
    formData.append("BankAccountNumber", BankAccountNumber);
    formData.append("PFNumber", PFNumber);
    formData.append("CIFNumber", CIFNumber);
    formData.append("Salary", Salary);
    formData.append("Photo", files[0]);


    const SignUpURL = `http://localhost:5001/signup`;

    axios
      .post(SignUpURL, formData, {
        headers: {  
          Accept: "auth",
          "Content-Type": "multipart/form-data",
       },
      })
      .then((res) => {
        if (res.data.success === true) {
          window.location.href=window.location.href;
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            // timer: 1500,
          });
          
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
  const [EmployeeList, setEmployeeList] = React.useState("");

  const getEmployeeList = (e) => {

    
      const formData = new FormData();
      formData.append("id", localStorage.getItem('id'));
      const AddUserUrl = `http://localhost:5001/detail/Employee`;
      axios
        .post(AddUserUrl, formData, {
          headers: {
            Accept: "auth",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.success == true) {
            console.log(response.data.result);
            setEmployeeList(response.data.result)

          }
        });

    
  }
  useEffect(() => {
    getEmployeeList();

  }, []);
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
                Team Members
              </h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/team" className="h5 text-white">
                Team Members
              </Link>
            </div>
          </div>
        </div>
      </div>

      {localStorage.getItem('admin') == "1"?<div className="card ms-auto me-auto col-10">
        <h1 className="text-white bg-primary text-center">Add Employee</h1>
        <form onSubmit={HandleSignup} className="p-2">
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Fist Name"
                  value={FirstName}
                  onChange={(e) => setFirstname(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastname(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Contect Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Contect Number"
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  placeholder="Address"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Technology
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={Technology}
                  onChange={(e) => setTechnology(e.target.value)}
                
                >
                  <option selected>Select Technology</option>
                  <option value="Android">Android</option>
                  <option value="React JS">React JS</option>
                  <option value="PHP">PHP</option>
                  <option value="Python">Python</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Position
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={Position}
                  onChange={(e) => setPosition(e.target.value)}
                
                >
                  <option selected>Select Position</option>
                  <option value="hr">Hr.</option>
                  <option value="sr">Sr.</option>
                  <option value="jr">Jr.</option>
                  <option value="trainee">Trainee.</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Joining Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="nameFormControlInput1"
                  value={JoiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Bank Account Number"
                  value={BankAccountNumber}
                  onChange={(e) => setBankAccountNumber(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  PF Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="PF Number"
                  value={PFNumber}
                  onChange={(e) => setPFNumber(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  CIF Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="CIF Number"
                  value={CIFNumber}
                  onChange={(e) => setCIFNumber(e.target.value)}
                
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Salary"
                  value={Salary}
                  onChange={(e) => setSalary(e.target.value)}
                
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="nameFormControlInput1"
                  onChange={handleimginput}
                />
              </div>
            </div>
            <div className="col-4"></div>
          </div>

          <button className="btn btn-primary" type="submit">
            Add Employee
          </button>
        </form>
      </div>:""}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Team Members
            </h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>
          <div className="row g-5">
            
              {EmployeeList.length > 0?<TeamMemberBox prod={EmployeeList}/>:""}
            
              
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
