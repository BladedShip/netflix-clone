"use client";

// import getFavorites from "@/hooks/getFavorites";
import movieData from "@/movieData.json";
import MovieList from ".";
import useFavoriteStore from "@/stores/favoriteStore";

type Props = {
  title: string;
};

const ClientWrapper = (props: Props) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const favoriteMovies = movieData.filter((movie) =>
    favorites?.includes(movie.slug)
  );
  // const { data: favorites =[]} = getFavorites();

  return <MovieList movieData={favoriteMovies} listTitle={props.title} />;
};

export default ClientWrapper;
