import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ text: "This is NOT OK" }, { status: 500 });
}
