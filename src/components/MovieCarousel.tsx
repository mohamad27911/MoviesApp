import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Movie {
  name: string;
  photoUrl: string;
}

const topMovies: Movie[] = [
  {
    name: "The Shawshank Redemption",
    photoUrl: "/src/assets/TheShawShankRedemption.jpg",
  },
  { name: "The Godfather", photoUrl: "src/assets/TheGodFather.jpg" },
  {
    name: "The Dark Knight",
    photoUrl: "src/assets/TheDark_Knight.jpg",
  },
  { name: "12 Angry Men", photoUrl: "src/assets/12_Angry_Men.jpg" },
  {
    name: "Schindler's List",
    photoUrl: "src/assets/SchnidersList.jpg",
  },
];

export default function MovieCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topMovies.length);
  };

  const prevMovie = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + topMovies.length) % topMovies.length
    );
  };

  // Same logic as SlideShow

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-9">
      <div className="relative h-72 cursor-pointer ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={topMovies[currentIndex].photoUrl}
          alt={topMovies[currentIndex].name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-between px-4">
          <button
            onClick={prevMovie}
            className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous movie"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextMovie}
            className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next movie"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 ">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Top Rated Movie
        </div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black truncate">
          {topMovies[currentIndex].name}
        </h2>
      </div>
    </div>
  );
}
