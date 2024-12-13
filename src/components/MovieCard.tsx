import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box, Chip, Rating } from "@mui/material";
import { PlayCircle } from 'lucide-react';

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  image: string;
  rating?: number;
  releaseYear?: number;
  genre?: string;
}

export default function MovieCard({ id, title, popularity, image, rating, releaseYear, genre }: MovieCardProps) {
  return (
    <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
          },
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
      >
        <Box sx={{ position: "relative", paddingTop: "150%", overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <PlayCircle size={64} color="#ffffff" />
          </Box>
        </Box>
        <CardContent sx={{ 
          flexGrow: 1, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          p: 2,
          height: "100px", // Fixed height for content area
        }}>
          <Box>
            <Typography 
              variant="h6" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: "bold", 
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, 
                lineHeight: 1.2, 
                mb: 1,
                height: "2.4em", // Fixed height for two lines of text
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {rating && (
                <Rating value={rating / 2} precision={0.5} readOnly size="small" sx={{ mr: 1 }} />
              )}
              {releaseYear && (
                <Typography variant="body2" color="text.secondary">
                  {releaseYear}
                </Typography>
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            {genre && (
              <Chip label={genre} size="small" sx={{ backgroundColor: "#1a237e", color: "#ffffff", fontWeight: "bold" }} />
            )}
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
              Popularity: {Math.round(popularity)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

