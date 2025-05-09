const express = require("express");
const router = express.Router();
const regController = require("../Controller/regController");

router.post("/saveRegistration", regController.SaveRegistration);
router.post("/saveCustomer", regController.SaveCustomer);
 router.post("/saveOrder", regController.SaveOrder);
 router.post("/saveProduct", regController.SaveProduct);
 router.post("/saveOrderWithItems", regController.saveOrderWithItems);


 router.post("/savereviews", regController.SaveReview);
 router.get("/getreviews", regController.GetReviews);
 router.delete("/deletereview", regController.DeleteReview);
 router.delete("/deletecartitem", regController.DeleteCartItem);
module.exports = router;