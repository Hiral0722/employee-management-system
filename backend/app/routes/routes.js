const express = require("express");
const router = express.Router();

const connection = require("../config/database");

const auth = require("../config/auth");
const UserController = require("../controller/userController");
const taskController = require("../controller/taskController");
const ContactController = require("../controller/contactusController");

//login
router.post("/user_login", UserController.userLogin);
router.post("/signup", UserController.Registration);
router.post("/getEmployeeFromTechnology", UserController.getEmployeeFromTechnology);
router.post("/detail/Employee", UserController.getEmployee);

//product
router.post("/add/task", taskController.AddTask);
router.post("/detail/TaskDetailFromEmployeeId", taskController.TaskDetailFromEmployeeId);
router.post("/update/taskStatus", taskController.updateTaskStatus);
router.post("/update/taskDetails", taskController.updateTaskDetails);

// router.post("/update/serviceStatus", ProductController.updateDetail);

router.post("/add/contactus", ContactController.ContactUs);



router.post("/check-in", (req, res) => {
    const { employee_id } = req.body;
    const date = new Date().toISOString().split("T")[0];
    const checkInTime = new Date().toLocaleTimeString("en-US", { hour12: false });

    connection.query(
        "INSERT INTO attendance (employee_id, date, check_in, status) VALUES (?, ?, ?, 'Present') ON DUPLICATE KEY UPDATE check_in = ?, status = 'Present'",
        [employee_id, date, checkInTime, checkInTime],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Check-in recorded successfully" });
        }
    );
});



router.post("/check-out", (req, res) => {
    const { employee_id } = req.body;
    const date = new Date().toISOString().split("T")[0];  
    const checkOutTime = new Date().toLocaleTimeString("en-US", { hour12: false });

    // Check if an attendance record exists
    connection.query(
        "SELECT * FROM attendance WHERE employee_id = ? AND date = ?",
        [employee_id, date],
        (err, results) => {
            if (err) return res.status(500).json({ error: err });

            if (results.length === 0) {
                return res.status(400).json({ message: "No check-in record found for this employee today" });
            }

            console.log("Existing Attendance Record:", results[0]);  // Debug log

            // Now update the check_out time
            connection.query(
                "UPDATE attendance SET check_out = ? WHERE employee_id = ? AND date = ?",
                [checkOutTime, employee_id, date],
                (err, result) => {
                    if (err) return res.status(500).json({ error: err });

                    if (result.affectedRows === 0) {
                        return res.status(400).json({ message: "Check-out failed, no matching record found." });
                    }

                    res.json({ message: "Check-out recorded successfully" });
                }
            );
        }
    );
});


router.get("/:employee_id", (req, res) => {
    const { employee_id } = req.params;
    connection.query(
        "SELECT * FROM attendance WHERE employee_id = ?",
        [employee_id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        }
    );
});


module.exports = router;

