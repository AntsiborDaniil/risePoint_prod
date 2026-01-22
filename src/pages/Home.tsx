import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import ServicesSection from "../components/sections/Services/Services";
import HeroSection from "../components/sections/Hero/Hero";
import MainHero from "@/components/sections/MainHero/MainHero";
import AboutSection from "@/components/sections/About/About";
import PortfolioSection from "../components/sections/Portfolio/Portfolio";
import BrandMarquee from "../components/ui/BrandMarquee/BrandMarquee";
import MobileScreenshots from "../components/sections/MobileScreenshots/MobileScreenshots";
import PromoSection from "../components/sections/PromoSection/PromoSection";
import TestimonialsSection from "../components/sections/Testimonials/Testimonials";
import ContactSection from "../components/sections/Contact/Contact";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "../components/ui/Modal/Modal";
import AbsoluteSection from "@/components/AbsoluteSection/AbsoluteSection";
import ScrollToTop from "../components/ui/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <ModalProvider>
      <div>
        <ScrollToTop />
        <Header />
        <main>
          <MainHero />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <BrandMarquee />
          <AbsoluteSection />
          <MobileScreenshots />
          <PortfolioSection />
          <PromoSection />
          <ContactSection />
          <TestimonialsSection />
        <Footer />
        </main>
        <Modal />
      </div>
    </ModalProvider>
  );
}
