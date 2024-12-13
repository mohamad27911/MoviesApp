import React from "react";
import { Box } from "@mui/material";
import MovieCard from "./MovieCard";

interface MovieCarouselProps {
  id: number;
  title: string;
  popularity: number;
  image: string;
  rating?: number;
  releaseYear?: number;
  genre?: string;
}

export default function MovieCarousel({ id, title, popularity, image, rating, releaseYear, genre }: MovieCarouselProps) {
  return (
    <Box sx={{ width: "100%", height: "100%",mb:"10px"}}>
      <MovieCard
        id={id}
        title={title}
        popularity={popularity}
        image={image}
        rating={rating}
        releaseYear={releaseYear}
        genre={genre}
      />
    </Box>
  );
}

