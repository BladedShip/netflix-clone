import Billboard from "@/components/Billboard";
import Footer from "@/components/Footer";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import ClientWrapper from "@/components/MovieList/ClientWrapper";
import Navbar from "@/components/Navbar";

import movieList from "@/movieData.json";

type Props = {};
const Home = (props: Props) => {
  return (
    <main>
      <InfoModal />
      <Navbar />
      <Billboard />
      <section id="recommended-movie-list">
        <MovieList movieData={movieList} listTitle="Recommended" />
      </section>
      <section id="favorite-movie-list">
        <ClientWrapper title="Favorites" />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
