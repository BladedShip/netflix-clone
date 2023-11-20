"use client";

import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import FavoriteButton from "@/components/MovieList/FavoriteButton";
import useMovieStore from "@/stores/movieStore";
import useModalStore from "@/stores/modalVisible";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import PlayButton from "../MovieList/PlayButton";

type Props = {};

const InfoModal = (props: Props) => {
  const movie = useMovieStore((state) => state.movie);
  const visible = useModalStore((state) => state.isVisible);
  const closeModal = useModalStore((state) => state.setIsVisible);

  if (!visible) return null;

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div className="transition duration-300 relative flex-auto bg-zinc-800 drop-shadow-md">
          <div className="relative h-96">
            <video
              className="w-full brightness-90 object-cover aspect-video"
              autoPlay
              muted
              loop
              src={movie?.videoUrl}
              poster={movie?.thumbnailUrl}
            />
            <button
              onClick={() => {
                closeModal(false);
              }}
              className="cursor-pointer absolute top-4 right-4 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={20} />
            </button>
            <div className="absolute bottom-2 left-10">
              <h3 className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {movie?.title}
              </h3>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton slug={movie?.slug || "/"} />
                <FavoriteButton movieSlug={movie?.slug || ""} />
              </div>
            </div>
          </div>
          <div className="py-8 pt-16 px-12 flex flex-col gap-4">
            {movie?.isNew && (
              <p className="text-green-400 text-sm font-semibold">
                New Release
              </p>
            )}
            <p className="text-white text-lg font-light">{movie?.duration}</p>
            <p className="text-white text-sm font-bold">{movie?.genre}</p>
            <p className="text-lg text-white leading-[1.3]">
              {movie?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
