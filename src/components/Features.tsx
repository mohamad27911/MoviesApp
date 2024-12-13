import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Typography, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { Film, Search, Star, Clock } from 'lucide-react';

const Features = [
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: 8,
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
            variant="h3"
            component="h2"
            align="center"
            sx={{ color: '#1a237e', mb: 6, fontWeight: 'bold' }}
          >
            Discover Our Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {Features.map((feature, index) => (
                <FeatureTab
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                  index={index}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                backgroundColor: '#1a237e',
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                minHeight: 300,
                boxShadow: 3,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -50 : 0 }}
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
                    transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {React.cloneElement(Features[activeFeature].icon, {
                      style: {
                        width: 64,
                        height: 64,
                        color: '#ffffff',
                      },
                    })}
                  </motion.div>
                  <Typography
                    variant="h4"
                    component="h3"
                    align="center"
                    sx={{ color: '#ffffff', mb: 2, fontWeight: 'bold' }}
                  >
                    {Features[activeFeature].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ color: '#ffffff', fontSize: '1.1rem' }}
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
}

function FeatureTab({ feature, isActive, onClick, index }: FeatureTabProps) {
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
          width: "100%",
          borderRadius: 2,
          backgroundColor: isActive ? '#1a237e' : '#ffffff',
          color: isActive ? '#ffffff' : '#1a237e',
          boxShadow: isActive ? 3 : 1,
          "&:hover": {
            backgroundColor: isActive ? '#0e1642' : '#f0f0f0',
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
            style: { width: 24, height: 24, color: isActive ? '#ffffff' : '#1a237e' },
          })}
        </motion.div>
        <Typography variant="button" sx={{ fontSize: '1rem', fontWeight: 'medium' }}>
          {feature.title}
        </Typography>
      </Button>
    </motion.div>
  );
}

