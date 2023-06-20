export default function ShopPage({
  params,
  searchParams,
}: {
	// need to manually add params and searchParams to the props
  params: { item: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Shop page!</h1>
			<p>Slug: {params.item}</p>
			<p>Search params: {searchParams.a}</p>
    </main>
  );
}
