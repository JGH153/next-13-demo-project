import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + context.params.id
  );
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  const body = await request.json();
  return NextResponse.json({ ...body, id: context.params.id });
}
