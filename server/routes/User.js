const express = require("express");
const router = express.Router();
const User = require("../controllers/User");

router.get("/students", User.students);
router.get("/admins", User.admins);
router.get("/expired", User.expired);
router.get("/getById/:UserId", User.getById);
router.get("/logout", User.logout);
router.post("/create", User.create);
router.post("/signin", User.signin);
router.delete("/delete/:UserId", User.delete);

module.exports = router;