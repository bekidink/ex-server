import { Router } from "express";
import categoryController from "../controllers/category.controller";

const router = Router();

// Get all categories
router.get("/categories", categoryController.getAllCategories);

// Get category by ID
router.get("/categories/:id", categoryController.getCategoryById);

// Create a new category
router.post("/categories/", categoryController.createCategory);

// Update category by ID
router.put("/categories/:id", categoryController.updateCategory);

// Delete category by ID
router.delete("/categories/:id", categoryController.deleteCategory);

export default router;
