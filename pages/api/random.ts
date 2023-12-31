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
    const movieCount = movieData.length;

    const randomMovie = movieData[Math.floor(Math.random() * movieCount)];

    return res.status(200).json(randomMovie);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
