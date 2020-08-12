const express = require("express");
const router = express.Router();

const { getAllUniqueCategories, getAllProducts, deleteProduct, updateProduct, photo, getProduct, getProductById, createProduct } = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
router.post(
    "/product/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createProduct
);

//read routes
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)


//delete routes
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);


//update routes
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listing route
router.get("/products", getAllProducts)


router.get("/products/categories", getAllUniqueCategories)

module.exports = router;