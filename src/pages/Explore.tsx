import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "../components/NextArrow";
import { PrevArrow } from "../components/PrevArrow"; // Removed extra space
import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  popularity: number;
}

export default function Explore() {
  const [post, setPost] = useState<Movie[]>([]); // Specified the type of movies array
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);
  const [ComedyMovies, setUpComedyMovies] = useState<Movie[]>([]);
  const [HorrorMovies, setHorrorMovies] = useState<Movie[]>([]);

  // Loading states
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(true);
  const [isLoadingComedy, setIsLoadingComedy] = useState(true);
  const [isLoadingHorror, setIsLoadingHorror] = useState(true);

  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2"; // API key
  const url = "https://api.themoviedb.org/3/movie";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const MovieLimit = 6;

  // Fetching top-rated movies
  useEffect(() => {
    axios
      .get(`${url}/popular?api_key=${KEY}`)
      .then((response) => {
        setPost(response.data.results);
        setIsLoadingPost(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching upcoming movies
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`)
      .then((response) => {
        setUpComingMovies(response.data.results);
        setIsLoadingUpcoming(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching comedy movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35`
      )
      .then((response) => {
        setUpComedyMovies(response.data.results);
        setIsLoadingComedy(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching horror movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27`
      )
      .then((response) => {
        setHorrorMovies(response.data.results);
        setIsLoadingHorror(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen text-textColor bg-backgroundColor">
      <NavBar search={false} />
      <SlideShow />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textColor mb-8 mt-9">
          Top Rated Movies
        </h1>
        <div className="mb-16">
          {isLoadingPost ? (
            <div className="text-center">Loading...</div> // Consider adding a loading spinner
          ) : (
            <Slider {...sliderSettings}>
              {post.length > MovieLimit
                ? post.slice(0, MovieLimit).map((movie) => ( // Check array length before slicing
                  <div key={movie.id} className="px-2 flex justify-center">
                    <MovieCarousel
                      title={movie.title}
                      popularity={movie.popularity}
                      image={`${imageBaseUrl}${movie.poster_path}`}
                      id={movie.id}
                    />
                  </div>
                ))
                : <div className="text-center">No movies found</div>}
            </Slider>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Upcoming Movies
        </h1>
        <div className="mb-16">
          {isLoadingUpcoming ? (
            <div className="text-center">Loading...</div>
          ) : (
            <Slider {...sliderSettings}>
              {upComingMovies.length > MovieLimit
                ? upComingMovies.slice(0, MovieLimit).map((movie) => (
                  <div key={movie.id} className="px-2 flex justify-center">
                    <MovieCarousel
                      title={movie.title}
                      popularity={movie.popularity}
                      image={`${imageBaseUrl}${movie.poster_path}`}
                      id={movie.id}
                    />
                  </div>
                ))
                : <div className="text-center">No movies found</div>}
            </Slider>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Comedy Movies
        </h1>
        <div className="mb-16">
          {isLoadingComedy ? (
            <div className="text-center">Loading...</div>
          ) : (
            <Slider {...sliderSettings}>
              {ComedyMovies.length > MovieLimit
                ? ComedyMovies.slice(0, MovieLimit).map((movie) => (
                  <div key={movie.id} className="px-2 flex justify-center">
                    <MovieCarousel
                      title={movie.title}
                      popularity={movie.popularity}
                      image={`${imageBaseUrl}${movie.poster_path}`}
                      id={movie.id}
                    />
                  </div>
                ))
                : <div className="text-center">No movies found</div>}
            </Slider>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Horror Movies
        </h1>
        <div className="mb-16">
          {isLoadingHorror ? (
            <div className="text-center">Loading...</div>
          ) : (
            <Slider {...sliderSettings}>
              {HorrorMovies.length > MovieLimit
                ? HorrorMovies.slice(0, MovieLimit).map((movie) => (
                  <div key={movie.id} className="px-2 flex justify-center">
                    <MovieCarousel
                      title={movie.title}
                      popularity={movie.popularity}
                      image={`${imageBaseUrl}${movie.poster_path}`}
                      id={movie.id}
                    />
                  </div>
                ))
                : <div className="text-center">No movies found</div>}
            </Slider>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}