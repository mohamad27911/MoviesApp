"use client";

import { cn } from "../../@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define types for movie data
interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}


export function CardDemo() {
  const url = "https://api.themoviedb.org/3/movie";
  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams(); // Type for params
  const [movie, setMovie] = useState<Movie | null>(null); // Movie state can be null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return; // Handle case where id is undefined
      try {
        const response = await axios.get(`${url}/${id}?api_key=${KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center text-2xl mt-10">Movie not found</div>;
  }

  return (
    <div className="w-full sm:max-w-xs mx-auto flex justify-center sm:block">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-auto min-h-[24rem] sm:h-[28rem] rounded-2xl shadow-2xl flex flex-col justify-end border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
        <img
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 p-4 sm:p-6 space-y-3 sm:space-y-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 line-clamp-2">
            {movie.title}
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="font-normal text-sm text-gray-200">
                <span className="font-semibold text-white">Category:</span> Action
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="font-semibold text-white">{movie.vote_average}</span>
              </div>
            </div>
            <div className="font-normal text-sm text-gray-200">
              <span className="font-semibold text-white">Release:</span>{" "}
              {new Date(movie.release_date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
