const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./app/routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
var multer = require("multer");
var async = require("async");
const compression = require("compression");
const attendanceRoutes = require("./app/routes/routes"); 

app.set("view engine", "ejs");
function parallel(middlewares) {
  return function (req, res, next) {
    async.each(
      middlewares,
      function (mw, cb) {
        mw(req, res, cb);
      },
      next
    );
  };
}

app.use(
  parallel([
    express.static(path.join(__dirname, "./uploads")),
    compression(),
    bodyParser.json({ limit: "50mb" }),
    bodyParser.urlencoded({
      parameterLimit: 100000,
      limit: "50mb",
      extended: true,
    }),
    multer({ dest: __dirname + "/uploads/" }).any(),
  ])
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(routes);


app.use("/api/attendance", attendanceRoutes);//attendance

app.post("/api/attendance/check-in", async (req, res) => {
  try {
      const { employee_id } = req.body;
      if (!employee_id) {
          return res.status(400).json({ error: "Employee ID is required" });
      }

      const today = new Date().toISOString().split("T")[0];

      // Insert or update check-in time
      const sql = `
          INSERT INTO attendance (employee_id, date, check_in, status)
          VALUES (?, ?, NOW(), 'Present')
          ON DUPLICATE KEY UPDATE check_in = NOW(), status = 'Present';
      `;

      connection.query(sql, [employee_id, today], (err, result) => {
          if (err) {
              console.error("Database error:", err);
              return res.status(500).json({ error: "Database error" });
          }
          res.json({ message: "Check-in successful", result });
      });
  } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/", (req, res) => {
  res.send("Ok It's Done!!!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is runnning on ${PORT} ........`);
});


