import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

// API route to get the current user on the server.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    if(!currentUser) return res.status(401).end();

    return res.status(200).json(currentUser);
    
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
