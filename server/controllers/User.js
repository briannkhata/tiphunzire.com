const mysql = require("mysql");
const md5 = require("md5");
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

exports.students = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM users WHERE Role ='Student' AND Deleted = 0",
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        }
        res.json(rows);
      }
    );
  });
};

exports.expired = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM Users WHERE Role ='Student' AND AccountExpired = 1",
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
};

exports.admins = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM Users WHERE Role ='Admin' AND Deleted = 0",
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
};

exports.create = (req, res) => {
  const {
    Name,
    UserName,
    PassWord,
    Email,
    Phone,
    ClassId,
    PlanId,
    Photo,
    Role,
  } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO Users SET Name = ?, UserName = ?,Phone = ?,Email = ?,ClassId = ?,PlanId = ?,Photo = ?,PassWord = ?,Role = ?",
      [Name, UserName, Phone, Email, ClassId, PlanId, Role, Photo, PassWord],
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
};

exports.getById = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM Users WHERE UserId = ?",
      [req.params.UserId],
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
};

exports.update = (req, res) => {
  let UserId = req.body.UserId;
  const { Name, UserName, PassWord, Email, Phone, ClassId, PlanId, Dob, Role } =
    req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "UPDATE Users SET Name = ?, UserName = ?,Phone = ?,Email = ?,ClassId = ?,PlanId = ?,Dob = ?,PassWord = ?,Role = ? WHERE UserId = ?",
      [
        Name,
        UserName,
        Phone,
        Email,
        ClassId,
        PlanId,
        Role,
        Dob,
        PassWord,
        UserId,
      ],
      (err, rows) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  });
};

exports.delete = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "UPDATE Users SET Deleted = 1 WHERE UserId = ?",
      [req.params.UserId],
      (err) => {
        connection.release();
        if (err) {
          res.json(err);
        } else {
          res.json("success");
        }
      }
    );
  });
};

exports.signin = (req, res) => {
  let username = req.body.username;
  let password = md5(req.body.password);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM Users WHERE username = ? AND password = ? AND AccountExpired = 0 AND Deleted = 0",
      [username, password],
      (err, results) => {
        connection.release();
        if (err) throw err;

        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = username;
          res.json({
            message: "Ok",
            data: rows,
          });
        } else {
          res.json({
            message: "Error",
          });
        }
      }
    );
  });
};
exports.logout = (req, res) => {
  req.session.destroy(() => {
    req.logout();
    res.json({
      message: "Ok",
    });
  });
};
