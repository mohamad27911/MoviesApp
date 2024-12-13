import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../theme";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/src/assets/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              color: theme.colors.background,
              mb: 2,
            }}
          >
            Discover the Magic of Cinema
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
              color: theme.colors.background,
              mb: 4,
              maxWidth: "600px",
            }}
          >
            Explore thousands of movies, find your favorites, and get
            personalized recommendations. Your cinematic journey starts here.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            component={Link}
            to="/explore"
            variant="contained"
            size="large"
            sx={{
              bgcolor: theme.colors.accent,
              color: theme.colors.background,
              "&:hover": {
                bgcolor: theme.colors.secondary,
              },
            }}
          >
            Start Exploring
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

