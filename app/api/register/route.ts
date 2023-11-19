import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prismaDB from "@/lib/prismaDB";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json();

    const isExistingUser = await prismaDB.user.findUnique({
      where: {
        email,
      },
    });

    if (isExistingUser) {
      return new NextResponse("User already exists", { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismaDB.user.create({
      data: {
        email,
        username,
        hashedPassword,
        image: "",
        emailVerifiedDate: new Date(),
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
