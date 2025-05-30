import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Communication from './components/Communication';
import AllInOne from './components/AllInOne';
import AIEmployee from './components/AIEmployee';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
   useSmoothScroll();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Communication />
      <AllInOne />
      <AIEmployee />
      <FeaturesGrid />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;