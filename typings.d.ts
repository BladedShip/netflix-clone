import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismaDB: PrismaClient;
  }
}

type MovieData = {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
  isNew?: boolean;
};
