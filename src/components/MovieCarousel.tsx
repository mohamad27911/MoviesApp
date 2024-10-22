import MovieCard from "./MovieCard";
interface PropsType {
  title: string;
  popularity: number;
  image: string;
  id: number;
}

export default function MovieCarousel({
  title,
  popularity,
  image,
  id,
}: PropsType) {
  return (
    <div className="mx-auto rounded-xl overflow-hidden mt-9 ">
      <MovieCard
        id={id}
        title={title} // Pass the title
        popularity={popularity} // Pass the popularity
        image={image}
      />
      <div className="p-4">
        
      </div>
    </div>
  );
}
