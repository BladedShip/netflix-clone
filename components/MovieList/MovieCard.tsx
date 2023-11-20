import { MovieData } from "@/typings";

import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

type Props = {
  movieData: MovieData;
};

const MovieCard = (props: Props) => {
  return (
    <div className="group bg-zinc-900 col-span relative aspect-video">
      <Image
        className="cursor-pointer rounded-md object-cover transition shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        src={props.movieData.thumbnailUrl}
        alt={props.movieData.title}
      />
      <div className="opacity-0 absolute top-0 transition z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-6 group-hover:opacity-100">
        <Image
          className="cursor-pointer object-cover transition shadow-xl rounded-t-md w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          height={250}
          width={250}
          src={props.movieData.thumbnailUrl}
          alt={props.movieData.title}
        />
        <div className="z-10 bg-zinc-800 p-4 absolute transition w-full rounded-b-md shadow-md">
          <div className="flex flex-row items-center gap-4">
            <button className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-neutral-400">
              <BsFillPlayFill className="ml-[2px]" size={26} />
            </button>
            <FavoriteButton movieSlug={props.movieData.slug} />
          </div>
          {props.movieData.isNew && (
            <p className="text-green-400 text-sm font-semibold mt-4">
              New Release
            </p>
          )}
          <div className="flex flex-row items-center gap-2 mt-2">
            <p className="text-white text-[10px] lg:text-sm font-light">
              {props.movieData.duration}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <p className="text-white text-[10px] lg:text-sm font-semibold">
              {props.movieData.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
