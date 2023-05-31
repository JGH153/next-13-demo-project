"use client";

import { useEffect, useState } from "react";

export function Client() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // fetch("api/data", { method: "POST" }) // 405 (Method Not Allowed)
    fetch("api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>Hello {data && data.text}</div>;
}
