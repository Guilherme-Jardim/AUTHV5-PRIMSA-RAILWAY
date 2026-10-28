import { PrismaClient } from '@prisma/client';
import { Product } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

import { auth } from '@/auth';

const prisma = new PrismaClient();

const naoAutorizado = () =>
  new NextResponse(JSON.stringify({ message: 'Não autorizado' }), { status: 401 });

export async function POST(request: NextRequest) {
  if (!(await auth())) return naoAutorizado();
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