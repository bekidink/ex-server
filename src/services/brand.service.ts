import { PrismaClient, Brand } from "@prisma/client";

const prisma = new PrismaClient();

class BrandService {
  // Fetch all brands
  async getAllBrands(): Promise<Brand[]> {
    return prisma.brand.findMany();
  }

  // Fetch a single brand by ID
  async getBrandById(brandId: string): Promise<Brand | null> {
    return prisma.brand.findUnique({
      where: { id: brandId },
    });
  }

  // Create a new brand
  async createBrand(data: Omit<Brand, "id">): Promise<Brand> {
    return prisma.brand.create({
      data,
    });
  }

  // Update an existing brand
  async updateBrand(
    brandId: string,
    data: Partial<Omit<Brand, "id">>
  ): Promise<Brand> {
    return prisma.brand.update({
      where: { id: brandId },
      data,
    });
  }

  // Delete a brand
  async deleteBrand(brandId: string): Promise<Brand> {
    return prisma.brand.delete({
      where: { id: brandId },
    });
  }
}

export default new BrandService();
