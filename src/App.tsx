import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />

      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}
