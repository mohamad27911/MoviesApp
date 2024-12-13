import React from "react";
import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { theme } from "../theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Cinemix
            </Typography>
            <Typography variant="body2">
              Your ultimate destination for movie information and reviews.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              {["Home", "Movies", "TV Shows", "About"].map((item) => (
                <MuiLink
                  component={Link}
                  to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  key={item}
                  color="inherit"
                  sx={{ display: "block", mb: 1 }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <MuiLink
                  key={index}
                  href="#"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      color: theme.colors.accent,
                    },
                  }}
                >
                  <Icon />
                </MuiLink>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Cinemix. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

