// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.get("/user", userController.getUser);

module.exports = router;
