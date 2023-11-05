import { revalidatePath } from "next/cache";

export default async function Revalidate() {
  console.log("one run");

  const response = await fetch("https://random-data-api.com/api/v2/users");
  const data = await response.json();
  const response2 = await fetch("https://random-data-api.com/api/v2/users");
  const data2 = await response2.json();

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
