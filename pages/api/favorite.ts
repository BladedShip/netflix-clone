import { NextApiRequest, NextApiResponse } from "next";

import prismaDB from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth";

import movieData from "@/movieData.json";
import { MovieData } from "@/typings";

// API route to handle adding and removing favorite movies.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req, res);

      const { movieSlug } = req.body;

      const existing = movieData.filter(
        (movie: MovieData) => movie.slug === movieSlug
      );

      if (!existing) {
        throw new Error("Invalid Movie");
      }
      const user = await prismaDB.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favorites: {
            push: movieSlug,
          },
        },
      });

      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req, res);

      const { movieSlug } = req.body;

      const existing = movieData.filter(
        (movie: MovieData) => movie.slug === movieSlug
      );

      if (!existing) {
        throw new Error("Invalid Movie");
      }

      const currentFavorites = currentUser.favorites.filter(
        (item: string) => item !== movieSlug
      );

      const userUpdate = await prismaDB.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favorites: currentFavorites,
        },
      });
      return res.status(200).json(userUpdate);
    }

    return res.status(405).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
