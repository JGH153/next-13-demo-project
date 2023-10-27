import { ServerAction } from "./ServerAction";
import { ServerActionClient } from "./ServerActionClient";
import { ServerActionClientFormStatus } from "./ServerActionClientFormStatus";

export default function Action() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Server Action</h1>
      <ServerAction />
      <h1 className="text-4xl font-bold">Server Action Client</h1>
      <ServerActionClient />
      <h1 className="text-4xl font-bold">Server Action Client Form Status</h1>
      <ServerActionClientFormStatus />
    </main>
  );
}
