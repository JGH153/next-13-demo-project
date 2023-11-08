import { getServerBasePath } from "@/utils/url-helpers";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from 'next/cache';

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default async function Revalidate() {
  // noStore(); Still stores some data :/
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

  const revalidatePage = async () => {
    "use server"; // needed?
    console.log("revalidatePage");
    revalidatePath("/revalidate");
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Revalidate</h1>
      <p>Random name: {data.first_name}!</p>
      <p>Random name2: {data2.first_name}!</p>
      <p>Rick name: {rickData.name}!</p>
      <p>Random post ID name: {postData.id}!</p>
      {/* <RevalidateComponent /> */}
      <form>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 mr-2 mb-2"
          formAction={revalidatePage}
        >
          Revalidate Page
        </button>
      </form>
    </main>
  );
}
