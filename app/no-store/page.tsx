import { getServerBasePath } from "@/utils/url-helpers";
import { unstable_noStore as noStore } from 'next/cache';

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default async function Revalidate() {
  noStore(); //Still stores some data :/
  console.log("one run");

  const response = await fetch("https://random-data-api.com/api/v2/users");
  const data = await response.json();
  const response2 = await fetch("https://random-data-api.com/api/v2/users");
  const data2 = await response2.json();

  const id = randomIntFromInterval(1, 482);
  const rickResponse = await fetch(getServerBasePath() + "/api/rick/" + id);
  const rickData = await rickResponse.json();

  const postResponse = await fetch(getServerBasePath() + "/api/rick/" + id, {
    method: "POST",
    body: JSON.stringify({ name: "test" }),
  });
  const postData = await postResponse.json();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">No Store</h1>
      <p>Random name: {data.first_name}!</p>
      <p>Random name2: {data2.first_name}!</p>
      <p>Rick name: {rickData.name}!</p>
      <p>Random post ID name: {postData.id}!</p>
    </main>
  );
}
