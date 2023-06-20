"use client";
import { useNameContext } from "@/utils/context/name-provider";
import { User } from "./User";

// never ever mark a client component as async
export default function Context() {
  const nameContext = useNameContext();

  const changeName = () => {
    nameContext.updateName("Pondus");
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Context parent</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => changeName()}
      >
        Change name to Pondus
      </button>
      <User />
    </main>
  );
}
