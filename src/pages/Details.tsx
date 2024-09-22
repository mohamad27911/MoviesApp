import { Box, Container, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import image from "/src/assets/image.png";
import { CardDemo } from '../components/CardDemo';

function Details() {
  return (
    <div>
      <NavBar search={false} />
      <Container className="pt-10 px-8" maxWidth="xl" disableGutters>
        {/* Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <div className="absolute -bottom-20 left-12">
            <CardDemo />
          </div>

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
        </Box>
      </Container>

      {/* Description Section */}
      <Container className="pt-10 px-8 mt-14" maxWidth="xl">
        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.8)", // Light background for contrast
            borderRadius: "8px",
            p: 4,
            boxShadow: 2, // Subtle shadow for depth
          }}
        >
          <Typography variant="h4" className="font-bold text-gray-800 mb-2">
            Movie Description
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            This is where you can add a detailed description of the movie. Include key details such as the plot, main characters, and any other information that would engage the reader. Make sure the text is well-structured and easy to read.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Details;
