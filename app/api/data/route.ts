import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nameQuery = searchParams.get("name");
  return NextResponse.json({ text: "This is OK, name: " + nameQuery });
}
