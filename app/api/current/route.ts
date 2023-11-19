import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextApiRequest) {
  try {
    const { currentUser } = await serverAuth(req);
    return new NextResponse(JSON.stringify(currentUser), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
