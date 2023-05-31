// Error components must be Client Components
"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("error", error.message);
  }, [error]);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Error occured!</h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
