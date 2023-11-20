"use client";

import getFavorites from "@/hooks/getFavorites";
import MovieList from ".";

type Props = {
  title: string;
};

const ClientWrapper = (props: Props) => {
  const { data: favorites =[]} = getFavorites();
  return <MovieList movieData={favorites} listTitle={props.title} />;
};

export default ClientWrapper;
