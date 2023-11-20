import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

import movieList from "@/movieData.json";

type Props = {};
const Home = (props: Props) => {
  return (
    <main>
      <Navbar />
      <Billboard />
      <section id="main-movie-list">
        <MovieList movieData={movieList} listTitle="Recommended"/>
      </section>
    </main>
  );
};

export default Home;
