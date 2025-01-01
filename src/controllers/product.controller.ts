import { Request, Response } from "express";
import productService from "../services/product.service";

class ProductController {
  // Get all products
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get product by ID
  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a new product
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newProduct = await productService.createProduct(data);
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update product by ID
  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      const data = req.body;
      const updatedProduct = await productService.updateProduct(
        productId,
        data
      );
      res.status(200).json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete product by ID
  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      await productService.deleteProduct(productId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();
