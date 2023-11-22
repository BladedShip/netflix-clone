"use client";

import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

import movieData from "@/movieData.json";
import useSearchStore from "@/stores/searchStore";
import { useEffect, useState } from "react";

type Props = {
  searchParams?: any;
};

const SearchPage = (props: Props) => {
  const searchQuery = props.searchParams?.query;
  // Why did I just search directly in here and not use an API endpoint?
  // This is a server component, so it will only ever be rendered on the server. Thus not letting the client see any of our endpoints

  // I am being forced to switch to a client component because the Auth Provider has issues working with the Vercel Server.
  // For some reason, this does not occur on local dev server

  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const [search, setSearch] = useSearchStore((state) => [
    state.search,
    state.setSearch,
  ]);

  useEffect(() => {
    const searchFilter = movieData.filter(
      (movie) =>
        movie.title.toLowerCase().includes(search?.toLowerCase()) ||
        movie.description.toLowerCase().includes(search?.toLowerCase()) ||
        movie.genre.toLowerCase().includes(search?.toLowerCase())
    );
    setFilteredMovies(searchFilter);
  }, [search]);

  return (
    <main>
      <InfoModal />
      <Navbar search={search} setSearch={setSearch} />
      <section className="py-8">
        <MovieList
          listTitle={
            searchQuery
              ? `Search results for "${searchQuery}"`
              : "Start typing to search"
          }
          movieData={filteredMovies}
        />
      </section>
    </main>
  );
};

export default SearchPage;
