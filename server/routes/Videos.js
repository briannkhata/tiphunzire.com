const express = require("express");
const router = express.Router();
const User = require("../controllers/User");

router.get("/Students", User.Students);
router.get("/Admins", User.Admins);
router.get("/Expired", User.Expired);
router.get("/:UserId", User.Delete);
//router.get("/addUser", User.form);
router.post("/SaveUser", User.SaveUser);
router.post("/Signin", User.Signin);
router.get("/GetUserById/:UserId", User.GetUserById);
router.post("/UpdateUser/:UserId", User.UpdateUser);
router.get("/Logout", User.Logout);

module.exports = router;
