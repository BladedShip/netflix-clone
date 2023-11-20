import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";

type Props = {};
const Home = (props: Props) => {
  return (
    <main>
      <Navbar />
      <Billboard />
    </main>
  );
};

export default Home;
