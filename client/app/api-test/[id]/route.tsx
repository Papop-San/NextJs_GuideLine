import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  console.log("test");

  return NextResponse.json({
    name: "mikelopster",
    id: params.id,
  });
}