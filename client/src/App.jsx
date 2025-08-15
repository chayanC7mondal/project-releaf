import Navigation from "./pages/home/navigation-bar";
import HeroSection from "./pages/home/hero-section";
import ImpactSection from "./pages/home/impact-section";
import FeaturesGrid from "./pages/home/features-grid-component";
import TestimonialsSection from "./pages/home/testimonial-section";
import CTASection from "./pages/home/call-to-action";
import Footer from "./pages/home/footer";

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main className="min-h-screen bg-white">
        <HeroSection />
        <ImpactSection />
        <FeaturesGrid />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
