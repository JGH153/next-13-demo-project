async function getRickData() {
  const data = await fetch("https://rickandmortyapi.com/api/character/482");
  return data.json();
}
async function getSecretData() {
  const data = await fetch("https://generate-secret.vercel.app/32", {
    cache: "no-store",
  });
  return data.text();
}

export default async function Home() {
  const rickData = await getRickData();
  const secretData = await getSecretData();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span>
        Hello {rickData.name} - code: {secretData}
      </span>
    </main>
  );
}
