import React, { useState, useEffect } from "react";

type Movie = {
  id: number;
  title: string;
  imageUrl: string;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "Deadpool & Wolverine",
    imageUrl: "src/assets/Deadpool&Wolverine.jpeg",
  },
  { id: 2, title: "Alien Romulus", imageUrl: "src/assets/AlienRomulus.jpg" },
  { id: 3, title: "Godzilla", imageUrl: "src/assets/Godzilla.webp" },
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fade for animation when slides change.
  const [fade, setFade] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade("opacity-0");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        setFade("opacity-100");
      }, 300); // Match this with the fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <img
        src={movies[currentIndex].imageUrl}
        alt={movies[currentIndex].title}
        className={`w-full h-80 object-cover rounded-lg shadow-lg transition-opacity duration-300 ${fade}`}
      />

      <div className="absolute inset-0 flex justify-between items-center">
        <button
          className="text-white bg-orange-500 p-2 rounded-full font-bold transition duration-200 hover:bg-white hover:text-orange-500"
          onClick={() => {
            setFade("opacity-0");
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
              setFade("opacity-100");
            }, 300); // Match this with the fade-out duration
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {movies.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
