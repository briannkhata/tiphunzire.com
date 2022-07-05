const mysql = require("mysql");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
//db connection
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "tiphunzire.com",
});

exports.plans = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM plans", (err, rows) => {
      connection.release();
      if (err) {
        res.json(err);
      }
      res.json(rows);
    });
  });
};

exports.create = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO plans SET plan = ? ",
      [req.body.plan],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.json({
            message: "Ok",
            data: rows,
          });
        }
      }
    );
  });
};

exports.getById = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM plans WHERE planId = ?",
      [req.params.planId],
      (err, rows) => {
        connection.release();
        if (err) {
          res.json({
            message: "Error",
          });
        } else {
          res.json({
            message: "Ok",
            data: rows,
          });
        }
      }
    );
  });
};

exports.update = (req, res) => {
  const { plan, planId } = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO plans SET plan = ? WHERE planId = ?",
      [plan, planId],
      (err, rows) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.json({
            message: "Ok",
            data: rows,
          });
        }
      }
    );
  });
};

exports.delete = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE FROM plans WHERE planId = ?",
      [req.params.planId],
      (err) => {
        connection.release();
        if (err) {
          console.log(err);
        } else {
          res.json({
            message: "Ok",
          });
        }
      }
    );
  });
};
