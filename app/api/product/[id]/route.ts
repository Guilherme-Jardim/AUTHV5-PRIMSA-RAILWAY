import { PrismaClient } from '@prisma/client';
import { Product } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

type FindById = {
	id: string;
};

export async function GET(request: NextRequest, context: { params: FindById }) {
 try {
  const products:Product = await prisma.product.findUniqueOrThrow({
    where:{
      id: Number(context.params.id),
    },
  });
  return new NextResponse(JSON.stringify(products),{
    status: 200,
    statusText: 'OK',
  });
} catch (error) {
  const msgError = (error as PrismaClientKnownRequestError).message;

  return new NextResponse(JSON.stringify({ message: msgError }), {
    status: 404,
    statusText: 'Not Found',
  });
}
}

export async function PUT(request: NextRequest, context: { params: FindById }) {
  const newProductData: Product = await request.json();
  try {
    const updatedProduct: Product = await prisma.product.update({
      where: {
        id: Number(context.params.id),
      },
      data:newProductData,
    });
    return new NextResponse(JSON.stringify(updatedProduct), {
      status: 200,
      statusText: 'OK',
    });
  } catch (error){
    const msgError = (error as PrismaClientKnownRequestError).meta?.cause;
    return new NextResponse(JSON.stringify({message: msgError}),{
      status: 404,
      statusText: 'Not Found',
    });
  }
}

export async function DELETE(
  request: NextRequest,
  context: {params: FindById}
){
  try{
    await prisma.product.delete({
      where: {
        id: Number(context.params.id),
      },
    });
    return new NextResponse(null, {
      status: 204,
      statusText: 'No Content',
    });
  } catch (error){
    const msgError = (error as PrismaClientKnownRequestError).meta?.cause;
    return new NextResponse(JSON.stringify({message: msgError}),{
      status: 404,
      statusText: 'Not Found',
    });
  }
}