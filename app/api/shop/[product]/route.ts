import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { product: string } }
) {
  return NextResponse.json({
    text: "This is OK, param: " + context.params.product,
  });
}
