import { PrismaClient,  HighlightProduct } from "@prisma/client";

const prisma = new PrismaClient();

class HighlightService {
  // Fetch all highlights
  async getAllHighlights(): Promise<HighlightProduct[]> {
    return prisma.highlightProduct.findMany();
  }

  // Fetch a single highlight by ID
  async getHighlightById(highlightId: string): Promise<HighlightProduct | null> {
    return prisma.highlightProduct.findUnique({
      where: { id: highlightId },
    });
  }

  // Create a new highlight
  async createHighlight(data: Omit<HighlightProduct, "id">): Promise<HighlightProduct> {
    return prisma.highlightProduct.create({
      data,
    });
  }

  // Update an existing highlight
  async updateHighlight(
    highlightId: string,
    data: Partial<Omit<HighlightProduct, "id">>
  ): Promise<HighlightProduct> {
    return prisma.highlightProduct.update({
      where: { id: highlightId },
      data,
    });
  }

  // Delete a highlight
  async deleteHighlight(highlightId: string): Promise<HighlightProduct> {
    return prisma.highlightProduct.delete({
      where: { id: highlightId },
    });
  }
}

export default new HighlightService();
