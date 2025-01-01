import { Request, Response } from "express";
import categoryService from "../services/category.service";

class CategoryController {
  // Get all categories
  async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get category by ID
  async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const categoryId = req.params.id;
      const category = await categoryService.getCategoryById(categoryId);
      if (!category) {
        res.status(404).json({ message: "Category not found" });
        return;
      }
      res.status(200).json(category);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new category
  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newCategory = await categoryService.createCategory(data);
      res.status(201).json(newCategory);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update category by ID
  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryId = req.params.id;
      const data = req.body;
      const updatedCategory = await categoryService.updateCategory(
        categoryId,
        data
      );
      res.status(200).json(updatedCategory);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete category by ID
  async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryId = req.params.id;
      await categoryService.deleteCategory(categoryId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CategoryController();
