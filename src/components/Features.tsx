import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Typography, Box, Button } from "@mui/material";
import { Film, Search, Star, Clock } from "lucide-react";

export const Features = [
  {
    icon: <Film />,
    title: "Extensive Movie Database",
    description:
      "Access a vast collection of movies from various genres and eras, all at your fingertips.",
  },
  {
    icon: <Search />,
    title: "Advanced Search",
    description:
      "Find your next favorite movie with our powerful search and filtering options.",
  },
  {
    icon: <Star />,
    title: "User Reviews",
    description:
      "Share your thoughts and read reviews from our community of movie enthusiasts.",
  },
  {
    icon: <Clock />,
    title: "Watchlist",
    description:
      "Never miss a movie again. Create and manage your personal watchlist with ease.",
  },
];

export default function AnimatedFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "var(--primary-color)",
        py: 6,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ color: "var(--background-color)", mb: 4 }}
          >
            Discover Our Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box
              sx={{ width: { xs: "100%", md: "33%" } }}
              className="gap-4 grid p-4"
            >
              {Features.map((feature, index) => (
                <FeatureTab
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                  index={index}
                  isMobile={isMobile}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "67%" },
                backgroundColor: "var(--secondary-color)",
                borderRadius: 2,

                position: "relative",
                overflow: "hidden",
                minHeight: 300,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : 50,
                    y: isMobile ? 50 : 0,
                  }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    x: isMobile ? 0 : -50,
                    y: isMobile ? -50 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{ marginBottom: "1rem" }}
                  >
                    {React.cloneElement(Features[activeFeature].icon, {
                      style: {
                        width: 48,
                        height: 48,
                        color: "var(--background-color)",
                      },
                    })}
                  </motion.div>
                  <Typography
                    variant="h5"
                    component="h3"
                    align="center"
                    sx={{ color: "var(--background-color)", mb: 2 }}
                  >
                    {Features[activeFeature].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ color: "var(--background-color)" }}
                  >
                    {Features[activeFeature].description}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

interface FeatureTabProps {
  feature: {
    icon: React.ReactElement;
    title: string;
  };
  isActive: boolean;
  onClick: () => void;
  index: number;
  isMobile: boolean;
}

function FeatureTab({
  feature,
  isActive,
  onClick,
  index,
}: FeatureTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Button
        onClick={onClick}
        sx={{
          justifyContent: "flex-start",
          padding: 2,
          marginBottom: 1,
          width: "100%",
          borderRadius: 1,
          backgroundColor: isActive
            ? "var(--secondary-color)"
            : "var(--background-color)",
          color: isActive
            ? "var(--background-color)"
            : "var(--secondary-color)",
          "&:hover": {
            backgroundColor: "var(--secondary-color)",
            color: "var(--background-color)",
          },
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginRight: "1rem", display: "flex" }}
        >
          {React.cloneElement(feature.icon, {
            style: { width: 24, height: 24 },
          })}
        </motion.div>
        <Typography variant="button">{feature.title}</Typography>
      </Button>
    </motion.div>
  );
}
