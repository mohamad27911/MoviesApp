import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

function Explore() {
  return (
    <div>
      <NavBar search={true} />
      <SlideShow />
      <h1 className=" text-5xl font-bold text-center text-[#F62A00] mb-2 mt-9 transition duration-200 delay-150 hover:text-white ">
        Top Rated Movies
      </h1>
      <div className="flex justify-center mr-12 ml-10">
        <MovieCarousel />
        <MovieCarousel />
        <MovieCarousel />
        <MovieCarousel />
      </div>
      <h1 className=" text-5xl font-bold text-center text-[#F62A00] mb-2 mt-9 transition duration-200 delay-150 hover:text-white">
        Action
      </h1>
      <div className="mb-12 flex justify-center mr-12 ml-10">
        <MovieCarousel />
        <MovieCarousel />
        <MovieCarousel />
        <MovieCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
