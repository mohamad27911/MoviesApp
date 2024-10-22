import { Box, Container, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import image from "/src/assets/image.png"
import { CardDemo } from "../components/CardDemo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Details() {
  const KEY = "3776781c8aea2e47d76bd18d3b21e3d2" // API key
  const url = "https://api.themoviedb.org/3/movie"

  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${url}/${id}?api_key=${KEY}`)
        setMovie(response.data)
      } catch (error) {
        console.error("Error fetching movie data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!movie) return <div className="text-center text-2xl mt-10">Movie not found</div>

  return (
    <div className="min-h-screen ">
      <NavBar search={false} />
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "70vh",
            minHeight: "500px",
            display: "flex",
            alignItems: "flex-end",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "0 0 20px 20px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
            }}
          />
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 4, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Box sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}>
                <CardDemo />
              </Box>
              <Box sx={{ flex: 1, minWidth: "300px", textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h2" className="text-white font-bold mb-2">
                  {movie.title}
                </Typography>
                <Typography variant="h6" className="text-gray-300 mb-4">
                  {movie.tagline}
                </Typography>
                <Box className="flex gap-4 flex-wrap">
                  <Typography variant="body1" className="text-gray-300">
                    <span className="font-semibold text-white">Release:</span> {movie.release_date}
                  </Typography>
                  <Typography variant="body1" className="text-gray-300">
                    <span className="font-semibold text-white">Rating:</span> {movie.vote_average}/10
                  </Typography>
                  <Typography variant="body1" className="text-gray-300">
                    <span className="font-semibold text-white">Runtime:</span> {movie.runtime} min
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: "20px",
            p: 4,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" className="font-bold text-gray-800 dark:text-gray-200 mb-4">
            Overview
          </Typography>
          <Typography variant="body1" className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {movie.overview}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default Details