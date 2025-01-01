import { Request, Response } from "express";
import brandService from "../services/brand.service";

class BrandController {
  async getAllBrands(req: Request, res: Response): Promise<void> {
    try {
      const brands = await brandService.getAllBrands();
      res.status(200).json(brands);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBrandById(req: Request, res: Response): Promise<void> {
    try {
      const brandId = req.params.id;
      const brand = await brandService.getBrandById(brandId);
      if (!brand) {
        res.status(404).json({ message: "Brand not found" });
        return;
      }
      res.status(200).json(brand);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createBrand(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newBrand = await brandService.createBrand(data);
      res.status(201).json(newBrand);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBrand(req: Request, res: Response): Promise<void> {
    try {
      const brandId =req.params.id;
      const data = req.body;
      const updatedBrand = await brandService.updateBrand(brandId, data);
      res.status(200).json(updatedBrand);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBrand(req: Request, res: Response): Promise<void> {
    try {
      const brandId = req.params.id;
      await brandService.deleteBrand(brandId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BrandController();
