"use client";

import { useEffect, useState, useTransition } from "react";
import { myServerAction, mySimpleServerAction } from "./onlyAction";
import { useFormStatus } from "react-dom";

// TODO https://makerkit.dev/blog/tutorials/nextjs-server-actions
export const ServerActionClientFormStatus = () => {
  return (
    <form action={myServerAction}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Create a new Post</h2>

        <label className="flex flex-col space-y-1.5">
          <span>Title</span>
          <input
            name="title"
            placeholder="Ex. The best Next.js libraries"
            className="text-black"
            required
          />
        </label>

        <SubmitButton />
      </div>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Creating article..." : "Create Article"}
    </button>
  );
}
