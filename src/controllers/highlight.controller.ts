import { Request, Response } from "express";
import highlightService from "../services/highlight.service";

class HighlightController {
  async getAllHighlights(req: Request, res: Response): Promise<void> {
    try {
      const highlights = await highlightService.getAllHighlights();
      res.status(200).json(highlights);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getHighlightById(req: Request, res: Response): Promise<void> {
    try {
      const highlightId = req.params.id;
      const highlight = await highlightService.getHighlightById(highlightId);
      if (!highlight) {
        res.status(404).json({ message: "Highlight not found" });
        return;
      }
      res.status(200).json(highlight);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createHighlight(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newHighlight = await highlightService.createHighlight(data);
      res.status(201).json(newHighlight);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateHighlight(req: Request, res: Response): Promise<void> {
    try {
      const highlightId = req.params.id;
      const data = req.body;
      const updatedHighlight = await highlightService.updateHighlight(
        highlightId,
        data
      );
      res.status(200).json(updatedHighlight);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteHighlight(req: Request, res: Response): Promise<void> {
    try {
      const highlightId = req.params.id;
      await highlightService.deleteHighlight(highlightId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new HighlightController();
