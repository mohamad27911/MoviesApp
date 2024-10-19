interface MovieCardProps {
    title: string;
    popularity: number;
    image: string;
  }
  
  export default function MovieCard({ title, popularity, image }: MovieCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-xs h-80">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 h-32 flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">{title}</h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Popularity</span>
            <span className="text-lg font-medium text-blue-600">{popularity.toFixed(1)}</span>
          </div>
        </div>
      </div>
    );
  }