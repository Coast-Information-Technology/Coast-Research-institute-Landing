import React from 'react';
import Slider from '@/components/reusables/slider';
import AboutSection from '@/components/reusables/aboutSection';
import ServicesSection from '@/components/reusables/servicesSection';
import App from '@/components/reusables/bubblesBackground';
import Testimonials from '@/components/reusables/testimonialSection';
import { testimonial } from '@/utils/data';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section Slider */}
      <Slider />

      {/* About Us Section */}
      <AboutSection />


      {/* Services Section */}
      <ServicesSection />


      {/* Testimonial Section */}
      <Testimonials testimonials={testimonial} />

      {/* Bubble Background */}
      <App />
    </main>
  );
};

export default Home;
