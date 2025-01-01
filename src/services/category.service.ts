import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

class CategoryService {
  // Fetch all categories
  async getAllCategories(): Promise<Category[] | null> {
    return prisma.category.findMany();
  }

  // Fetch a single category by ID
  async getCategoryById(categoryId: string): Promise<Category | null> {
    return prisma.category.findUnique({
      where: { id: categoryId },
      include: {
        products: true,
      },
    });
  }

  // Create a new category
  async createCategory(data: Omit<Category, "id">): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }

  // Update an existing category
  async updateCategory(
    categoryId: string,
    data: Partial<Omit<Category, "id">>
  ): Promise<Category> {
    return prisma.category.update({
      where: { id: categoryId },
      data,
    });
  }

  // Delete a category
  async deleteCategory(categoryId: string): Promise<Category> {
    return prisma.category.delete({
      where: { id: categoryId },
    });
  }
}

export default new CategoryService();
