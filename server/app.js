const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

// Configuring body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//db connection
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "tiphunzire.com",
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected as ID " + connection.threadId);
});

//Load routes
const user = require("./routes/User");
const grade = require("./routes/Grade");
const plan = require("./routes/Plan");

app.use("/api/v1/user/", user);
app.use("/api/v1/grade/", grade);
app.use("/api/v1/plan/", plan);
app.listen(port, () => console.log(`The App is Listening on port ${port}!`));
