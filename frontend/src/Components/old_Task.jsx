import axios from "axios";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskBox from "../Container/TaskBox";
import React, { useEffect, useState } from "react";
const Swal = require("sweetalert2");

const Task = () => {
  const [ToEmployee, setToEmployee] = React.useState("");
  const [TaskName, setTaskName] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [EndDate, setEndDate] = React.useState("");
  const [Technology, setTechnology] = React.useState("");
  const [TaskList, setTaskList] = React.useState("");


  let TechnologyList;
  // let CustomerList = null;
  const [CustomerList, setCustomerList] = useState([]);
  let Technologies = [
    "Select Technology", "Android", "React JS", "PHP", "Python"
  ]
  if (localStorage.getItem('Position') == "sr") {
    let technology = [
      localStorage.getItem('Technology')
    ]
    TechnologyList = technology.map((item, i) => {
      return (
        <option value={item}>{item}</option>
      )
    }, this);

  } else {
    TechnologyList = Technologies.map((item, i) => {
      return (
        <option value={item}>{item}</option>
      )
    }, this);

  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("TaskName", TaskName);
    formData.append('Description', Description);
    formData.append('FromEmployee', localStorage.getItem('id'));
    formData.append('ToEmployee', ToEmployee);
    formData.append('EndDate', EndDate);
    formData.append('Technology', Technology);
    axios.post("http://localhost:5001/add/task", formData, {
      headers: {
        Accept: "auth",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        // setBillList(response.data.result);
        if (response.data.success === true) {
          Swal.fire({
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            // timer: 1500,
          });

        }
      }).catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data.message,
          showConfirmButton: true,
        });
      });


  }
  const getEmployeeFromTechnology = (e) => {
    e.preventDefault();
    setTechnology(e.target.value);
    const formData = new FormData();
    formData.append("Technology", e.target.value);
    const AddUserUrl = `http://localhost:5001/getEmployeeFromTechnology`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          // CustomerList = null;
          setCustomerList(response.data.result)
          // CustomerList = , this);
          // CustomerList = response.data.result.map((item) => <option value={item.id}>{item.FirstName}</option>)
          console.log(CustomerList);
        }
      });

  }

  const getTaskFromId = (e) => {

    if (localStorage.getItem('Position') !== "admin" && localStorage.getItem('Position') !== "hr"
      && localStorage.getItem('Position') !== "sr") {

      const formData = new FormData();
      formData.append("id", localStorage.getItem('id'));
      const AddUserUrl = `http://localhost:5001/detail/TaskDetailFromEmployeeId`;
      axios
        .post(AddUserUrl, formData, {
          headers: {
            Accept: "auth",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.success == true) {
            setTaskList(response.data.result)

          }
        });

    } else {
      const formData = new FormData();
      // console.log("localStorage.getItem('id')",localStorage.getItem('id'));
      formData.append("FromEmployeeId", localStorage.getItem('id'));
      const AddUserUrl = `http://localhost:5001/detail/TaskDetailFromEmployeeId`;
      axios
        .post(AddUserUrl, formData, {
          headers: {
            Accept: "auth",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.success == true) {
            setTaskList(response.data.result)

          }
        });

    }
  }
  useEffect(() => {
    getTaskFromId();

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
              <h1 className="display-4 text-white animated zoomIn">Task</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/task" className="h5 text-white">
                Task
              </Link>
            </div>
          </div>
        </div>
      </div>

      {localStorage.getItem('Position') == "hr" || localStorage.getItem('Position') == "sr" || localStorage.getItem('Position') == "admin" ? (<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="card ms-auto me-auto col-4">
            <h1 className="text-white bg-primary text-center">Add Task</h1>
            <form className="p-2" onSubmit={handelSubmit}>
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder="Task Name"
                  value={TaskName}
                  onChange={(e) => setTaskName(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Technology
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={getEmployeeFromTechnology}
                // value={Technology}
                // onChange={setTechnology}

                >
                  <option value="">Select Any One</option>
                  {TechnologyList}
                </select>
              </div>
              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  Employee
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={ToEmployee}
                  onChange={(e) => setToEmployee(e.target.value)}

                >
                  <option value="">Select Any One</option>
                  {

                    CustomerList.map((item, i) => {
                      return (

                        <option value={item.id}>{item.FirstName}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="mb-3">
                <label for="nameFormControlInput1" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="nameFormControlInput1"
                  value={EndDate}
                  onChange={(e) => setEndDate(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Task Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Task Description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}

                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>) : (''
      )}
      <div className="row">
        <div className="col-md-6">
          Given Task
{        TaskList.length > 0 ? <TaskBox prod={TaskList}/>:""}
      </div></div>
    </>
  );
};
export default Task;
