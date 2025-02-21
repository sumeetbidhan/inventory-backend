const Product = require("../models/productModel");

// @desc Get all products
// @route GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// @desc Get a single product by ID
// @route GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// @desc Create a new product
// @route POST /api/products
const createProduct = async (req, res) => {
  try {
    const { name, price, stock, description } = req.body;
    if (!name || !price || !stock) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    const newProduct = new Product({ name, price, stock, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

// @desc Update a product
// @route PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// @desc Delete a product
// @route DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
