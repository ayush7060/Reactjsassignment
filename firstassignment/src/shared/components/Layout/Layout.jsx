import AboutSection from "../about/AboutSection";
import BannerMain from "../banner/Banner";
import BlogSection from "../Blog/BlogSection";
import Carouselcontainer from "../carousel/carouselcontainer";
import CounterSections from "../Counter/CounterSection";
import Featuresection from "../Features/FeatureSection";
import ProcessSection from "../processstep/ProcessSection";
import ServiceMain from "../services/ServicesSection";
import TeamSection from "../Team/TeamSection";
import TestimonialSection from "../Testimonial/TestimonialsSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Carouselcontainer />
      <Featuresection />
      <AboutSection />
      <CounterSections />
      <ServiceMain />
      <ProcessSection />
      <BlogSection />
      <BannerMain />
      <TeamSection/>
      <TestimonialSection/>
      <Footer />
    </>
  );
}
