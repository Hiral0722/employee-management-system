import React from "react";
import TaskModel from "../Layouts/TaskModel";
import axios from "axios";
const Swal = require("sweetalert2");

const TaskBox = ({ prod }) => {
console.log(prod);
let customerList = prod.map((item, i) => {
  return (
    <div className="card ms-auto me-auto col-8 p-3">
      <div className="row">
        <div className="col-4">
          <h4 className="text-primary">Task Name</h4>
          {item.TaskName}
        </div>
        <div className="col-4">
          <h4 className="text-primary">Description</h4>
          {item.Description}
        </div>
        
        <div className="col-4">
          <h4 className="text-primary">End Date</h4>
          {item.EndDate}
        </div>
        <div className="col-8">
        <h4 className="text-primary">Status</h4>
          {localStorage.getItem('Position')!="admin" && localStorage.getItem('Position')!="hr" && localStorage.getItem('Position')!="sr"?(<select value={item.status} class="form-control" onChange={(e)=> updateStatus(item.id,e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="Done">Done</option>
            
          </select>):(item.status)}
          
        </div>
        {/* <div className="col-1">
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#myModalView"
      >
        View
      </button>
      <br />
      <br />
    </div> */}
        <TaskModel />
      </div>
    </div>

  )
}, this);
const updateStatus = (id,value)=>{
  const formData = new FormData();
  formData.append("id", id);
  formData.append('status', value);
  axios.post("http://localhost:5001/update/taskStatus", formData, {
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
  

  return (
    <>
    <div>
      {customerList}
    </div>
    </>
  );
};

export default TaskBox;
