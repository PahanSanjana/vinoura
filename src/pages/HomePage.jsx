import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import RunwayHighlights from '../components/RunwayHighlights';
import FeaturedCouture from '../components/FeaturedCouture';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewArrivals />
      <RunwayHighlights />
      <FeaturedCouture />
      <BrandStory />
      <Footer />
    </div>
  );
};

export default HomePage;

