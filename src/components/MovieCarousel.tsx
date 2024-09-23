
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
const currentIndex =0;



  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-9">
      <div className="relative h-72 cursor-pointer ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={topMovies[currentIndex].photoUrl}
          alt={topMovies[currentIndex].name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-between px-4">
         
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
