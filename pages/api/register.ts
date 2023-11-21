import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismaDB from "@/lib/prismaDB";

// API route to handle registering a new user.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const { email, username, password } = req.body;

    const existingUser = await prismaDB.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(422).json({ error: "User Already Exists" });
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
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
