import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import Features from "../components/Features"


function Home() {
  return (
    <div>
      <NavBar search={false} />

      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}

export default Home