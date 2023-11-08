import { headers } from "next/headers";

export const getServerBasePath = () => {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "";
  const domain = headersList.get("x-forwarded-host") || "";
  return protocol + "://" + domain;
};
