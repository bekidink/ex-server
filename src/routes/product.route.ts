import { Router } from "express";
import productController from "../controllers/product.controller";

const router = Router();

// Get all products
router.get("/products", productController.getAllProducts);

// Get product by ID
router.get("/products/:id", productController.getProductById);

// Create a new product
router.post("/products/", productController.createProduct);

// Update product by ID
router.put("/products/:id", productController.updateProduct);

// Delete product by ID
router.delete("/products/:id", productController.deleteProduct);

export default router;
