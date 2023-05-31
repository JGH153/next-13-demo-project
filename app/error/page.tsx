export default function ErrorPage() {

  // this will be persistent until reload
  if (Math.random() > 0.5) {
    throw new Error("This is an error");
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Error page!</h1>
    </main>
  );
}
