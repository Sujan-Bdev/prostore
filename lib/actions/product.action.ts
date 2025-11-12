import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { convertToPlainObject } from '../utils';
import prisma from '../../db/prisma';

// Get latest products
export async function getLatestProducts() {
  //   const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createAt: 'desc' },
  });
  const plain = convertToPlainObject(data);
  return plain;

  // return plain.map(p => ({
  //   ...p,
  //   price: Number(p.price),
  //   rating: Number(p.rating),
  // }));
}

// Get single product by it's slug

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  });
}
