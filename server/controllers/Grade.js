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

exports.grades = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "SELECT * FROM grades",
            (err, rows) => {
                connection.release();
                if (err) {
                    res.status(400).json({
                        error: err.message
                    });
                    return;
                }
                res.json({
                    message: "Ok",
                    data: rows,
                });
            }
        );
    });
};

exports.create = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "INSERT INTO grades SET Grade = ? ",
            [req.body.Grade],
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
            "SELECT * FROM grades WHERE gradeId = ?",
            [req.params.gradeId],
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
    const {
        grade,
        gradeId,
    } = req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "INSERT INTO grades SET grade = ? WHERE gradeId = ?",
            [
                grade,
                gradeId,
            ],
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
            "DELETE FROM grades WHERE GradeId = ?",
            [req.params.gradeId],
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