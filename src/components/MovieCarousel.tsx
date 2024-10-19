import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
interface PropsType{
  title: string;
  popularity: number;
  image: string;

}


export default function MovieCarousel({title,popularity,image}:PropsType) {


  return (
    <div className="mx-auto rounded-xl overflow-hidden mt-9 mx-2">
          <MovieCard
            title={title} // Pass the title
            popularity={popularity} // Pass the popularity
            image={image}
          />
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Top Rated Movies
        </div>
      </div>
    </div>
  );
}
