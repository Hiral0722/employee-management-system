const con = require("../config/database");
const table = require("../config/tables");

exports.AddTask = (req, res) => {
  const requestData = req.body;
  const sql =
    `INSERT INTO ${table.task} (ToEmployeeName,FromEmployeeName,TaskName, Description, FromEmployee, ToEmployee, EndDate,Technology)` +
    ` VALUES ('${requestData.ToEmployeeName}','${requestData.FromEmployeeName}','${requestData.TaskName}', '${requestData.Description}', '${requestData.FromEmployee}', '${requestData.ToEmployee}',  '${requestData.EndDate}', '${requestData.Technology}')`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task create successfully",
      result: results,
    });
  });
};

exports.TaskDetail = (req, res) => {
  // const requestData = req.body;
  const sql = `SELECT * FROM ${table.task} ORDER BY id desc`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task detail",
      result: results,
    });
  });
};

exports.updateTaskDetails = (req, res) => {
  const { id, TaskName, Description, EndDate, ToEmployeeName, ToEmployee, Technology } = req.body;

  const sql = `
    UPDATE ${table.task}
    SET TaskName='${TaskName}', Description='${Description}', EndDate='${EndDate}',
        ToEmployeeName='${ToEmployeeName}', ToEmployee='${ToEmployee}', Technology='${Technology}'
    WHERE id=${id}
  `;

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task updated successfully",
      result: results,
    });
  });
};



exports.TaskDetailFromEmployeeId = (req, res) => {
  // const requestData = req.body;
  let sql; 
  if(req.body.FromEmployeeId){
  sql=`SELECT * FROM ${table.task} Where FromEmployee=${req.body.FromEmployeeId} ORDER BY id desc` ;
  }else{
  sql=`SELECT * FROM ${table.task} Where ToEmployee=${req.body.id} ORDER BY id desc` ;
  }
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task detail",
      result: results,
    });
  });
};

exports.updateTaskStatus = (req, res) => {
  // const requestData = req.body;
  const sql = `UPDATE ${table.task} SET status='${req.body.status}'  Where id=${req.body.id}` ;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task detail",
      result: results,
    });
  });
};