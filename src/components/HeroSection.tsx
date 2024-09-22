
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import image from "/src/assets/image.png";

export default function HeroSection() {
  return (
    <Container className="pt-10 px-8" maxWidth="xl" disableGutters>
      <Box
        sx={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <Grid container spacing={0} sx={{ width: "100%", height: "100%" }}>
          {/* Right Section for Text */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: "bold",
                    color: "var(--background-color)",
                    bgcolor: "var(--primary-color)",
                    p: 1,
                    mb: 2,
                    display: "inline-block",
                  }}
                >
                  Discover the Best Movies
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "var(--background-color)",
                    mb: 3,
                  }}
                >
                  Explore thousands of movies, find your favorites, and get
                  personalized recommendations. Start your movie journey now!
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  href="/explore"
                  sx={{
                    bgcolor: "var(--text-color)",
                    color: "var(--background-color)",
                    "&:hover": {
                      bgcolor: "var(--secondary-color)",
                    },
                    mb: 2,
                  }}
                >
                  Explore Now
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Discover something new every day.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
          {/* Left Section for Animated Element */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: "var(--background-color)" }}
                  >
                    Movie
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
