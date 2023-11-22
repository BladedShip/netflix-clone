import { NextApiRequest, NextApiResponse } from "next";

import movieData from "@/movieData.json";

// API route to get a random movie.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    console.log(req.query);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
