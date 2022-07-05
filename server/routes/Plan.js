const express = require("express");
const router = express.Router();
const Plan = require("../controllers/Plan");

router.get("/plans", Plan.plans);
router.get("/getById/:PlanId", Plan.getById);
router.post("/create", Plan.create);
router.put("/update/:PlanId", Plan.update);
router.delete("/delete/:PlanId", Plan.delete);

module.exports = router;
