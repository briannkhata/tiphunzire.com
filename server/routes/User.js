const express = require("express");
const router = express.Router();
const User = require("../controllers/User");

router.get("/Students", User.Students);
router.get("/Admins", User.Admins);
router.get("/Expired", User.Expired);
router.get("/GetById/:UserId", User.GetById);
router.get("/Logout", User.Logout);
router.post("/SaveUser", User.SaveUser);
router.post("/Signin", User.Signin);
router.delete("/Delete/:UserId", User.Delete);

module.exports = router;