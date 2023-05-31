import { Suspense } from "react";
import { Slowest } from "./Slowest";

export default async function Slow() {
  const slowData = await fetch("https://hub.dummyapis.com/delay?seconds=2", {
    cache: "no-store",
  });
  const slowDataText = await slowData.text();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Slow</h1>
      <p className="text-xl">This is the slow page</p>
      <div>Data: {slowDataText}</div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Slowest />
      </Suspense>
    </main>
  );
}
