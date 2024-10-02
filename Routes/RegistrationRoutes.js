const express = require("express");
const router = express.Router();
const regController = require("../Controller/regController");

router.post("/saveRegistration", regController.SaveRegistration);
router.post("/saveCustomer", regController.SaveCustomer);
 router.post("/saveOrder", regController.SaveOrder);
module.exports = router;