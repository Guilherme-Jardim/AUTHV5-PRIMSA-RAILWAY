import { PrismaClient } from '@prisma/client';
import { Product } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const newProduct: Product = await request.json();
  const createdProduct: Product = await prisma.product.create({
    data: newProduct,
  });
  return new NextResponse(JSON.stringify(createdProduct),{
    status: 201,
    statusText: 'Created',
  });
}

export async function GET(){
  const products: Product[] = await prisma.product.findMany();
return new NextResponse(JSON.stringify(products),{
  status: 200,
  statusText: 'OK',
})
}