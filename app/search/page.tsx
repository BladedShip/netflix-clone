import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

import movieData from "@/movieData.json";

type Props = {
  searchParams?: any;
};

const SearchPage = (props: Props) => {
  const searchQuery = props.searchParams?.query;
  // Why did I just search directly in here and not use an API endpoint?
  // This is a server component, so it will only ever be rendered on the server. Thus not letting the client see any of our endpoints
  const filteredMovies = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <main>
      <InfoModal />
      <Navbar />
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
