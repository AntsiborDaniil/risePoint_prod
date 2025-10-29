import Header from "../components/ui/Header/Header";
import AnimatedFooter from "../components/ui/Footer/AnimatedFooter";
import ServicesSection from "../components/sections/Services/Services"; // Добавляем импорт
import HeroSection from "../components/sections/Hero/Hero";
import MainHero from "@/components/sections/MainHero/MainHero";
import AboutSection from "@/components/sections/About/About";
import PortfolioSection from "../components/sections/Portfolio/Portfolio";
import LazySection from "../components/ui/LazySection/LazySection";
import BrandMarquee from "../components/ui/BrandMarquee/BrandMarquee";
import MobileScreenshots from "../components/sections/MobileScreenshots/MobileScreenshots";
import PromoSection from "../components/sections/PromoSection/PromoSection";
import TestimonialsSection from "../components/sections/Testimonials/Testimonials";
import ContactSection from "../components/sections/Contact/Contact";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "../components/ui/Modal/Modal";
import AbsoluteSection from "@/components/AbsoluteSection/AbsoluteSection";

export default function Home() {
  return (
    <ModalProvider>
      <div>
        <Header />
        <main>
          <MainHero />
          <HeroSection />
          <LazySection>
            <ServicesSection />
          </LazySection>
          <LazySection>
            <AboutSection />
          </LazySection>
          <LazySection>
            <BrandMarquee />
          </LazySection>
          <LazySection>
            <AbsoluteSection />
          </LazySection>
          <LazySection>
            <MobileScreenshots />
          </LazySection>
          <LazySection>
            <PortfolioSection />
          </LazySection>
          <LazySection>
            <PromoSection />
          </LazySection>
          <LazySection>
            <ContactSection />
          </LazySection>
        </main>
        <TestimonialsSection />
        <AnimatedFooter />
        <Modal />
      </div>
    </ModalProvider>
  );
}
