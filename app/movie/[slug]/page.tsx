import { MovieData } from "@/typings";

import { AiOutlineArrowLeft } from "react-icons/ai";

import movieData from "@/movieData.json";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const MoviePage = (props: Props) => {
  const currentMovie = movieData.filter(
    (movie: MovieData) => movie.slug === props.params.slug
  )[0];
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 items-center flex gap-4">
        <Link href={`/`} className="cursor-pointer">
          <AiOutlineArrowLeft className="text-white" size={40} />
        </Link>
        <h1 className="text-white text-xl lg:text-2xl">{currentMovie.title}</h1>
      </nav>
      <video autoPlay controls src={currentMovie.videoUrl} className="h-full w-full"/>
    </div>
  );
};

export default MoviePage;

export async function generateStaticParams() {
  const slugs = movieData.map((movie: MovieData) => movie.slug);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

// Ensures that only values in the array are valid routes, else returns a 404
export const dynamicParams = false;

// Statically Generates all the paths specified by generateStaticParams with a revalidation time of 3600 seconds (1 hour) (ISR)
export const revalidate = 3600;

// Pages that are Statically Generated (SSG)
