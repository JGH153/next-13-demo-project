"use client";

import { useEffect, useState, useTransition } from "react";
import { myServerAction, mySimpleServerAction } from "./onlyAction";

export const ServerActionClient = () => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("test");

  useEffect(() => {
    setValue("test2");
  }, []);
  return (
    <>
      <form action={myServerAction}>
        <input type="text" name="name" className="text-black" />
        <br />
        <button type="submit">Submit</button>
      </form>

      State: {isPending ? "Pending" : "Idle"}

      <button
        onClick={() =>
          startTransition(() => {
            mySimpleServerAction(value);
          })
        }
      >
        Run direct action
      </button>
    </>
  );
};
