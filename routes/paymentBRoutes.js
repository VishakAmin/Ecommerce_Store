const express = require("express");
const { user } = require("../models/user");
const router = express.Router();
const { isSignedIn, isAuthenticated} = require("../controllers/auth");
const { getToken, processPayment } = require("../controllers/paymentb");
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById)

router.get("/payment/gettoken/:userId",isSignedIn, isAuthenticated, getToken);
router.post("/payment/braintree/:userId", isSignedIn, isAuthenticated, processPayment)
module.exports = router;