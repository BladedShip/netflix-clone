import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prismaDB from "@/lib/prismaDB";

export async function hanler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });
  try {
    const { email, username, password } = await req.body;

    const isExistingUser = await prismaDB.user.findUnique({
      where: {
        email,
      },
    });

    if (isExistingUser) {
      return res.status(422).json({ message: "User already exists" });
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

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
