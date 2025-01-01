import { Router } from "express";
import highlightController from "../controllers/highlight.controller";

const router = Router();

router.get("/highlights", highlightController.getAllHighlights);
router.get("/highlights/:id", highlightController.getHighlightById);
router.post("/highlights/", highlightController.createHighlight);
router.put("/highlights/:id", highlightController.updateHighlight);
router.delete("/highlights/:id", highlightController.deleteHighlight);

export default router;
