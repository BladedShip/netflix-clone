import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismaDB from "@/lib/prismaDB";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return { currentUser: null };
  }

  const currentUser = await prismaDB.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return {
      currentUser: null,
    };
  }

  return { currentUser };
};

export default serverAuth;
