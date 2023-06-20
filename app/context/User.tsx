"use client";

import { useNameContext } from "@/utils/context/name-provider";

export const User = () => {
  const nameContext = useNameContext();

  const changeName = () => {
    nameContext.updateName("Hanne");
  };
  return (
    <div>
      <h1>User child</h1>
      <p className="text-xl">Name: {nameContext.name}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => changeName()}
      >
        Change name to Hanne
      </button>
    </div>
  );
};
