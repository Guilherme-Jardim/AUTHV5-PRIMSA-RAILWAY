import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
import isValidUrl from '@/utils/IsValidUrl';

const prisma = new PrismaClient();

export async function ProductsPage() {
  const productsResponse = await prisma.product.findMany();
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {productsResponse.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
            {product.imageUrl && isValidUrl(product.imageUrl) && (
              <Image src={product.imageUrl} alt={product.name} height={100} width={100} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}