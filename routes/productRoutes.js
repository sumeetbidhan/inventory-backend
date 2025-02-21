const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// Routes
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get single product by ID
router.post("/", createProduct); // Create a new product
router.put("/:id", updateProduct); // Update product by ID
router.delete("/:id", deleteProduct); // Delete product by ID

module.exports = router;
