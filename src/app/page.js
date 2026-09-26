import AboutTeaser from '@/components/sections/AboutTeaser/AboutTeaser';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ServicesPreview from '@/components/sections/ServicesPreview/ServicesPreview';
import Testimonials from '@/components/sections/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <Testimonials />
      <CtaBand />
    </>
  );
}
