import React from "react";

const TaskModel = () => {
  return (
    <>
      <div className="modal" id="myModalView">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header  bg-primary ">
              <h4 className="modal-title text-white">Task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div>Task Name</div>
              <div>Task Description</div>
              <div>Enddate</div>
            </div>
            <div className="modal-footer">
              <span className="text-primary"> Task Given By</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModel;
