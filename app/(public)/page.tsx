import { auth } from "@/auth"
import GoogleButton from "../components/GoogleButton";
import ButtonLogOut from "../components/ButtonLogOut";
import ImagePerfil from "../components/ImagePerfil";
import { ProductsPage } from "../components/Products";

export default async function Home() {
  const session = await auth();
  const imageUrl = await session?.user?.image;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session ? (
        <GoogleButton />
      ) : (
        <div>
          <p>{session?.user?.name}</p>
          {typeof imageUrl === 'string' && <ImagePerfil imageUrl={imageUrl} />}
          <ButtonLogOut />
        </div>
      )}
      <ProductsPage />
    </div>
  );
}
