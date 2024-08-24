// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController");

router.get("/products", productController.getProducts);

router.get("/getproduct", productController.getProductByProductID);

// router.post("/saveproduct", productController.AuthenticateUser);

// router.post("/deleteproduct", productController.AuthenticateUser);
module.exports = router;