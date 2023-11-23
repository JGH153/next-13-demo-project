import { getServerBasePath } from "@/utils/url-helpers";

export default async function ErrorPage() {
  // this will be persistent until reload
  if (process.env.NODE_ENV === "development") {
    if (Math.random() > 0.5) {
      // throw new Error("This is an error");
    }
  }

  const data = await fetch(getServerBasePath() + "/api/error", {
    headers: {
      cache: "no-store",
    },
  });

  console.log("data", data.status);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Error page!</h1>
    </main>
  );
}
