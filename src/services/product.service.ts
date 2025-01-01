import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

class ProductService {
  // Fetch all products
  async getAllProducts(): Promise<Product[]> {
    return prisma.product.findMany({
      include: {
        
        category: true,
      },
    });
  }

  // Fetch a single product by ID
  async getProductById(productId: string): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id: productId },
      include: {
        brand: true,
        category: true,
      },
    });
  }

  // Create a new product
  async createProduct(data: Omit<Product, "id">): Promise<Product> {
    return prisma.product.create({
      data,
    });
  }

  // Update an existing product
  async updateProduct(
    productId: string,
    data: Partial<Omit<Product, "id">>
  ): Promise<Product> {
    return prisma.product.update({
      where: { id: productId },
      data,
    });
  }

  // Delete a product
  async deleteProduct(productId: string): Promise<Product> {
    return prisma.product.delete({
      where: { id: productId },
    });
  }
}

export default new ProductService();
