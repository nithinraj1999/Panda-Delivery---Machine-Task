import Navbar from "./components/Layout/Navbar"
import HeroSection from "./components/sections/HeroSection"
import TrackingInfoBar from "./components/sections/TrackingInfoBar"
import ServicesSection from "./components/sections/ServicesSection"
import AboutUsSection from "./components/sections/AboutUsSection"
import FeaturesSection from "./components/sections/FeaturesSection"
import TestimonialsSection from "./components/sections/TestimonielsSection"
import BlogSection from "./components/sections/BlogSection"
import CtaSection from "./components/sections/CtaSection"
import Footer from "./components/Layout/Footer"
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <TrackingInfoBar />
      <ServicesSection />
      <AboutUsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
