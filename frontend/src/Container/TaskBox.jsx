import React, { useState } from "react";
import TaskModel from "../Layouts/TaskModel";
import axios from "axios";
const Swal = require("sweetalert2");

const TaskBox = ({ prod, iseditable, refreshTasks }) => {
  const [editTask, setEditTask] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const currentUserId = localStorage.getItem("id");

  const handleEdit = (task) => {
    setEditTask({ ...task });
    setShowEdit(true);
  };

  const updateTask = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", editTask.id);
    formData.append("TaskName", editTask.TaskName);
    formData.append("Description", editTask.Description);
    formData.append("EndDate", editTask.EndDate);
    formData.append("ToEmployeeName", editTask.ToEmployeeName);
    formData.append("ToEmployee", editTask.ToEmployee);
    formData.append("Technology", editTask.Technology);
    axios
      .post("http://localhost:5001/update/taskDetails", formData, {
        headers: { Accept: "auth", "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          setShowEdit(false);
          refreshTasks();
          Swal.fire({ icon: "success", title: response.data.message, timer: 1000, showConfirmButton: false });
        }
      })
      .catch((err) => {
        Swal.fire({ icon: "warning", title: err.response?.data?.message || "Something went wrong" });
      });
  };

  // Status updater for assignees
  const updateStatus = (id, status) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("status", status);
    axios
      .post("http://localhost:5001/update/taskStatus", formData, {
        headers: { Accept: "auth", "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({ icon: "success", title: response.data.message, timer: 1000, showConfirmButton: false });
          refreshTasks();
        }
      })
      .catch((err) => {
        Swal.fire("Error", err.response?.data?.message || err.message, "error");
      });
  };

  return (
    <div>
      {prod.map((item, i) => (
        <div key={i} className="card mt-4 p-3">
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
            <div className="col-4">
              <h4 className="text-primary">To Employee</h4>
              {item.ToEmployeeName}
            </div>
            <div className="col-4">
              <h4 className="text-primary">From Employee</h4>
              {item.FromEmployeeName}
            </div>
            <div className="col-4">
              <h4 className="text-primary">Status</h4>
              {iseditable !== false && localStorage.getItem("admin") !== "1" ? (
                <select
                  className="form-select"
                  value={item.status || "To Do"}
                  onChange={(e) => updateStatus(item.id, e.target.value)}
                >
                  <option value="To Do">To Do</option>
                  <option value="Done">Done</option>
                </select>
              ) : (
                item.status || "—"
              )}
            </div>

            {/* Only the assigner (original creator) sees the Edit button */}
            {iseditable && item.FromEmployee?.toString() === currentUserId && (
              <div className="col-12 mt-2">
                <button className="btn btn-warning" onClick={() => handleEdit(item)}>
                  Edit
                </button>
              </div>
            )}

            <TaskModel />
          </div>
        </div>
      ))}

      {showEdit && (
        <div className="modal d-block" tabIndex="-1" style={{ background: "#00000066" }}>
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h4>Edit Task</h4>
              <form onSubmit={updateTask}>
                {/* form fields for TaskName, Description, EndDate */}
                <div className="mb-2">
                  <label>Task Name</label>
                  <input
                    className="form-control"
                    value={editTask.TaskName}
                    onChange={(e) => setEditTask({ ...editTask, TaskName: e.target.value })}
                  />
                </div>
                <div className="mb-2">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    value={editTask.Description}
                    onChange={(e) => setEditTask({ ...editTask, Description: e.target.value })}
                  />
                </div>
                <div className="mb-2">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={editTask.EndDate}
                    onChange={(e) => setEditTask({ ...editTask, EndDate: e.target.value })}
                  />
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-secondary" onClick={() => setShowEdit(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-success" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskBox;
