import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import image from "/src/assets/image.png"; // Ensure the path is correct

export default function HeroSection() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          minHeight: "500px", // Minimum height
          display: "flex",
          alignItems: "center", // Vertically centers content
          overflow: "hidden", // Ensure content does not exceed the container
          backgroundImage: `url(${image})`, // Set the background image
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image from repeating
          width: "100%", // Ensure it takes full width
          position: "relative", // Allow positioning of the overlay
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute", // Position the overlay absolutely
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)", // Dark overlay with transparency
          }}
        />

        <Grid container spacing={0} sx={{ width: "100%", height: "100%" }}>
          {/* Right Section for Text */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4, // Adds padding
                height: "100%", // Ensures the text section fills the container height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers the text vertically
                position: "relative", // Position relative for text layering
                zIndex: 1, // Ensure text is above the overlay
              }}
            >
              <h1 className="text-5xl py-4 text-primary bg-backgroundColor w-fit px-2 font-bold">Discover the Best Movies</h1>
              <p className="text-2xl text-backgroundColor font-medium">
                Explore thousands of movies, find your favorites, and get personalized recommendations. Start your movie journey now!
              </p>
              <a
                className="text-backgroundColor bg-textColor"
                href="/explore"
                style={{
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  textAlign: "center",
                  marginTop: "20px",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                Explore Now
              </a>
              <small style={{ marginTop: "10px", color: "#888" }}>
                Discover something new every day.
              </small>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
