export async function Slowest() {
  const slowData = await fetch("https://hub.dummyapis.com/delay?seconds=3", {
    cache: "no-store",
  });

	console.log("123")

  const slowDataText = await slowData.text();

	const randNum = Math.floor(Math.random() * 100);

  return (
    <>
      <h1>Slowest comp {randNum}</h1>
      <div>Data: {slowDataText}</div>
    </>
  );
}
