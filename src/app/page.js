import AboutTeaser from '@/components/sections/AboutTeaser/AboutTeaser';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ServicesPreview from '@/components/sections/ServicesPreview/ServicesPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}
