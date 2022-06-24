const express = require("express");
const router = express.Router();
const Grade = require("../controllers/Grade");

router.get("/grades", Grade.grades);
router.get("/GetById/:GradeId", Grade.getById);
router.post("/Create", Grade.create);
router.put("/Update/:GradeId", Grade.update);
router.delete("/Delete/:GradeId", Grade.delete);

module.exports = router;