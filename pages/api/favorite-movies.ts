import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

import movieData from "@/movieData.json";
import { MovieData } from "@/typings";

// API route to get the current user's favorite movies.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);

    const favoriteMovies = movieData.filter((item: MovieData) =>
      currentUser?.favorites.includes(item.slug)
    );

    return res.status(200).json(favoriteMovies);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
