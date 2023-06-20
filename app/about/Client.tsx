"use client";

import { useEffect, useState } from "react";

export function Client() {
  const [data, setData] = useState<any>(null);
  const [cookieData, setCookieData] = useState<any>(null);
  const [paramData, setParamData] = useState<any>(null);

  useEffect(() => {
    // fetch("api/data", { method: "POST" }) // 405 (Method Not Allowed)
    fetch("api/data?name=Greger")
      .then((res) => res.json())
      .then((data) => setData(data));

    // no need for revalidate argument, always re-fetch
    fetch("api/cookie")
      .then((res) => res.json())
      .then((data) => setCookieData(data));


    fetch("api/shop/123")
      .then((res) => res.json())
      .then((data) => setParamData(data));
  }, []);

  return (
    <div>
      Hello {data && data.text} | {cookieData && cookieData.text} | {paramData && paramData.text}
    </div>
  );
}
