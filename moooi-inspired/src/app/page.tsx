import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </main>
  );
}
