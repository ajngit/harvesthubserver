
const express = require("express");
const router = express.Router();
const regController = require("../Controller/regController");

router.post("/saveRegistration", regController.SaveRegistration);
// router.get("/getproduct", regController.getProductByProductID);
module.exports = router;