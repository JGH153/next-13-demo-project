
import { cookies } from 'next/headers'
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// for the session
  cookies().set('name', 'lee', { secure: true })
  return NextResponse.json({ text: "Cookie set" });
}
