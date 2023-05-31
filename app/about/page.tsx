import { Client } from "./Client";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-xl">This is the about page</p>
      <div>
        <Client />
      </div>
    </main>
  );
}
