import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import NewArrivals from '../components/NewArrivals';
import RunwayHighlights from '../components/RunwayHighlights';
import FeaturedCouture from '../components/FeaturedCouture';
import BrandStory from '../components/BrandStory';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <NewArrivals />
      <RunwayHighlights />
      <FeaturedCouture />
      <BrandStory />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default HomePage;

