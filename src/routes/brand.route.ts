import { Router } from "express";
import brandController from "../controllers/brand.controller";

const router = Router();

router.get("/brands", brandController.getAllBrands);
router.get("/brands/:id", brandController.getBrandById);
router.post("/brands/", brandController.createBrand);
router.put("/brands/:id", brandController.updateBrand);
router.delete("/brands/:id", brandController.deleteBrand);

export default router;
