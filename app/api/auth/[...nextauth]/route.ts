import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prismaDB from "@/lib/prismaDB";

const handler = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prismaDB.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid Username");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user.hashedPassword
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
