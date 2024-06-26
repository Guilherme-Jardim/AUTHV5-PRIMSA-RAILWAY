import { auth } from "@/auth"

export default async function Home() {
  const session = await auth()
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      {session &&
        <div>
          <p>{session?.user?.name}</p>

        </div>
      }
    </div>
  );
}
