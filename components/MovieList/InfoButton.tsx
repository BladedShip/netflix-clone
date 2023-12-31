"use client";

import useModalStore from "@/stores/modalVisible";
import useMovieStore from "@/stores/movieStore";
import { MovieData } from "@/typings";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  movie: MovieData;
};

const InfoButton = (props: Props) => {
  const setMovie = useMovieStore((state) => state.setMovie);
  const setVisible = useModalStore((state) => state.setIsVisible);
  return (
    <button
      className=" ml-auto w-6 h-6 lg:w-10 lg:h-10 flex border-white border-2 rounded-full opacity-60 items-center justify-center hover:opacity-50 transition"
      onClick={(e) => {
        e.preventDefault();
        setMovie(props.movie);
        setVisible(true);
      }}
    >
      <BsChevronDown className="text-white mt-1" size={24} />
    </button>
  );
};

export default InfoButton;
