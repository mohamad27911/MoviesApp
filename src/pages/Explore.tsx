import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "../components/NextArrow";
import { PrevArrow } from "../components/PrevArrow ";

export default function Explore() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
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
    <div className="min-h-screen text-textColor">
      <NavBar search={true} />
      <SlideShow />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-9">
          Top Rated Movies
        </h1>
        <Slider {...sliderSettings}>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
        </Slider>

        <h1 className="text-5xl font-bold text-center text-textColor mb-8 mt-16">
          Action
        </h1>
        <Slider {...sliderSettings}>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
          <div>
            <MovieCarousel />
          </div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
}
