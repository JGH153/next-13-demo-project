import { getBeth } from "@/utils/getBeth";

export default async function Earth() {
  const bethData = await getBeth();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Earth</h1>
      <p className="text-xl">This is the earth page</p>
      <div>Data: {bethData.name}</div>
    </main>
  );
}
