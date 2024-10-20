import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "../components/NextArrow";
import { PrevArrow } from "../components/PrevArrow ";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Explore() {
  const [post, setPost] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [ComedyMovies, setUpComedyMovies] = useState([]);
  const [HorrorMovies, setHorrorMovies] = useState([]);
  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2"; // API key
  const url = "https://api.themoviedb.org/3/movie";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const MovieLimit = 6;

  // Fetching top rated movies

  useEffect(() => {
    axios
      .get(`${url}/popular?api_key=${KEY}`)
      .then((response) => {
        console.log(response.data.results); // Check if results are being logged correctly
        setPost(response.data.results); // Ensure results are stored in 'post'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching Upcoming Movies

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`)
      .then((response) => {
        console.log(response.data.results); // Check if results are being logged correctly
        setUpComingMovies(response.data.results); // Ensure results are stored in 'post'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching Comedy Movies

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35`
      )
      .then((response) => {
        console.log(response.data.results); // Check if results are being logged correctly
        setUpComedyMovies(response.data.results); // Ensure results are stored in 'post'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fetching Horror Movies

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27
`
      )
      .then((response) => {
        console.log(response.data.results); // Check if results are being logged correctly
        setHorrorMovies(response.data.results); // Ensure results are stored in 'post'
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen text-textColor ">
      <NavBar search={true} />
      <SlideShow />

      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-9">
          Top Rated Movies
        </h1>
        <Slider {...sliderSettings}>
          {post.slice(10, 16).map((movie) => (
            <div>
              {/* Top Rated Movies Carousel */}
              <MovieCarousel
                title={movie.title} // Pass the title
                popularity={movie.popularity} // Pass the popularity
                image={`${imageBaseUrl}${movie.poster_path}`} // Handle missing images
                id={movie.id} // Pass the ID
              />
            </div>
          ))}
        </Slider>

        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Upcoming Movies
        </h1>
        <Slider {...sliderSettings}>
          {upComingMovies.slice(0, MovieLimit).map((movie) => (
            <div>
              {/* Action Movies Carousel */}
              <MovieCarousel
                title={movie.title} // Pass the title
                popularity={movie.popularity} // Pass the popularity
                image={`${imageBaseUrl}${movie.poster_path}`} // Handle missing images
                id={movie.id} // Pass the ID
              />
            </div>
          ))}
        </Slider>
        {/* Comedy Movies */}
        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Comedy Movies
        </h1>
        <Slider {...sliderSettings}>
          {ComedyMovies.slice(0, MovieLimit).map((movie) => (
            <div key={movie.id}>
              <MovieCarousel
                title={movie.title} // Pass the title
                popularity={movie.popularity} // Pass the popularity
                image={`${imageBaseUrl}${movie.poster_path}`} // Handle missing images
                id={movie.id} // Pass the ID
              />
            </div>
          ))}
        </Slider>
        {/* Horror Movies */}
        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Horror Movies
        </h1>
        <Slider {...sliderSettings}>
          {HorrorMovies.slice(0, MovieLimit).map(
            (
              movie //slice is to limit movies to 5 slides
            ) => (
              <div key={movie.id}>
                <MovieCarousel
                  title={movie.title} // Pass the title
                  popularity={movie.popularity} // Pass the popularity
                  image={`${imageBaseUrl}${movie.poster_path}`} // Handle missing images
                  id={movie.id} // Pass the ID
                />
              </div>
            )
          )}
        </Slider>
      </div>

      <Footer />
    </div>
  );
}
