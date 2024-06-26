// 'use client'
// import { FormEvent, useState } from 'react';

// export default function ProductPage() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();

//     // Validação dos campos
//     if (!name || !description || !price) {
//       alert("Nome, descrição e preço são campos obrigatórios.");
//       return;
//     }

//     // Dados do produto
//     const productData = {
//       name,
//       description,
//       price: Number(price),
//       imageUrl
//     };

//     // Enviar dados para a API
//     try {
//       const response = await fetch('/api/product', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao criar produto.');
//       }

//       const data = await response.json();
//       console.log(data);
//       alert('Produto criado com sucesso!');
//     } catch (error) {
//       console.error("Erro ao criar produto:", error);
//     }

//   };

//   return (
//     <form className='bg-white text-black inline-block' onSubmit={handleSubmit}>
//       <label>
//         Nome:
//         <input name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </label>

//       <label>
//         Descrição:
//         <input name='description' type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       </label>

//       <label>
//         Preço:
//         <input name='price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
//       </label>

//       <label>
//         URL da Imagem:
//         <input name='imageUrl' type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//       </label>

//       <button type="submit">Cadastrar Produto</button>
//     </form>
//   );
// }


export function AddProduct() {


  async function CreateProduct(form: FormData) {
    'use server'

    const name = form.get('name');
    const description = form.get('description');
    const price = form.get('price');
    const imageUrl = form.get('imageUrl');

    if (!name || !description || !price) {
      return
    }

    const productData = {
      name,
      description,
      price: Number(price),
      imageUrl
    };

    await fetch('http://localhost:3000/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
  };


  return (
    <form className='bg-white text-black inline-block' method="POST" action={CreateProduct}>
      <label>
        Nome:
        <input name='name' type="text" required />
      </label>

      <label>
        Descrição:
        <input name='description' type="text" required />
      </label>

      <label>
        Preço:
        <input name='price' type="number" required />
      </label>

      <label>
        URL da Imagem:
        <input name='imageUrl' type="text" />
      </label>

      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

