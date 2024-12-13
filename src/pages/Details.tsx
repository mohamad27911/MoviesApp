import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Chip, 
  Grid, 
  Button, 
  CircularProgress,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { PlayCircle, Clock, Calendar, Star, TrendingUp } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MovieCarousel from '../components/MovieCarousel';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  overview: string;
  genres: { id: number; name: string }[];
  tagline: string;
  popularity: number;
}

interface Recommendation {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  popularity: number;
}



export default function Details() {
  const { id } = useParams<Record<string, string | undefined>>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState<string | null>(null); // Added state for trailer key

  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2";
  const url = "https://api.themoviedb.org/3/movie";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${url}/${id}?api_key=${KEY}`);
        setMovie(response.data);

        // Fetch movie recommendations
        const recommendationsResponse = await axios.get(`http://127.0.0.1:5000/recommendations?movie_id=${id}`);
        const recommendedMovies: Recommendation[] = recommendationsResponse.data;
        setRecommendations(recommendedMovies);

        // Fetch trailer information
        const videosResponse = await axios.get(`${url}/${id}/videos?api_key=${KEY}`);
        const trailers = videosResponse.data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // Render logic unchanged except for the "Watch Trailer" button
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--background-color)' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!movie) {
    return <Typography variant="h4" align="center" sx={{ mt: 4, backgroundColor: 'var(--background-color)' }}>Movie not found</Typography>;
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--background-color)' }}>
      <NavBar search={false} />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={6} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                {movie.title}
              </Typography>
              {movie.tagline && (
                <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2, fontStyle: 'italic' }}>
                  "{movie.tagline}"
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {movie.genres.map((genre) => (
                  <Chip key={genre.id} label={genre.name} sx={{ bgcolor: '#1a237e', color: 'white' }} />
                ))}
              </Box>
              {/* Watch Trailer Button */}
              {trailerKey && (
                <Button
                  variant="contained"
                  startIcon={<PlayCircle />}
                  size="large"
                  sx={{
                    bgcolor: '#1a237e',
                    color: 'white',
                    '&:hover': { bgcolor: '#0d1b60' },
                    mt: 2,
                  }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${trailerKey}`, '_blank')}
                >
                  Watch Trailer
                </Button>
              )}
            </motion.div>
          </Grid>
        </Grid>

        {/* Recommendations Section */}
        {recommendations.length > 0 ? (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
              Recommended Movies
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              {recommendations.map((rec) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={rec.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MovieCarousel
                      title={rec.title}
                      popularity={rec.popularity}
                      image={`${imageBaseUrl}${rec.poster_path}`}
                      id={rec.id}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Typography variant="h6" align="center" sx={{ mt: 6, color: 'text.secondary' }}>
            No recommended movies found
          </Typography>
        )}
      </Container>
      <Footer />
    </Box>
  );
}
