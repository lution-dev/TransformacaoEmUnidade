import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import AuthorSection from '@/components/AuthorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookPreviewSection from '@/components/BookPreviewSection';
import FAQSection from '@/components/FAQSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BottomCTA from '@/components/BottomCTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      {/* Main Quote */}
      <section className="bg-white py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-primary mb-4">
            "Tudo começa dentro de você!"
          </blockquote>
          <p className="text-lg font-montserrat">Governando seu espírito, alma e corpo</p>
        </div>
      </section>
      
      <BenefitsSection />
      <AboutSection />
      <AuthorSection />
      <TestimonialsSection />
      <BookPreviewSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTA />
      <Footer />
      <BottomCTA />
    </div>
  );
};

export default Home;
