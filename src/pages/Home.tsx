
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

import Footer from '../components/Footer';
import Features from '../components/Features';

function Home() {
  return (
    <div>
      <NavBar search ={true}/>
      <HeroSection/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Home;
