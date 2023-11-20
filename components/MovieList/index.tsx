import { MovieData } from "@/typings";
import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  movieData: MovieData[];
  listTitle: string;
};

const MovieList = (props: Props) => {
  return (
    <div className="px-4 md:px-12 space-y-8 py-8">
      <div className="">
        <h3 className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 mt-8">
          {props.listTitle}
        </h3>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 w-full">
          {props.movieData.map((movie, _) => (
            <MovieCard key={_} movieData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Since Flex overflow clips the hover component, we need to use a portal to render the hover component outside of the flex container
// As a temp fix, I am keeping the components in a grid layout

export default MovieList;
