import { getServerBasePath } from "@/utils/url-helpers";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default async function ISR() {
  const response = await fetch("https://random-data-api.com/api/v2/users", {
    // smallest value for one url will affect both calls
    next: { revalidate: 5 },
  });
  const data = await response.json();
  const response2 = await fetch("https://random-data-api.com/api/v2/users", {
    next: { revalidate: 20 },
  });
  const data2 = await response2.json();

  const id = randomIntFromInterval(1, 482);
  const rickResponse = await fetch(getServerBasePath() + "/api/rick/" + id, {
    next: { revalidate: 20 },
  });
  const rickData = await rickResponse.json();

  const postResponse = await fetch(getServerBasePath() + "/api/rick/" + id, {
    method: "POST",
    body: JSON.stringify({ name: "test" }),
    next: { revalidate: 20 },
  });
  const postData = await postResponse.json();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Time revalidate</h1>
      <p>Random name 5sec: {data.first_name}!</p>
      <p>Random name 20sec: {data2.first_name}!</p>
      <p>Rick name: {rickData.name}!</p>
      <p>Random post ID name: {postData.id}!</p>
    </main>
  );
}
