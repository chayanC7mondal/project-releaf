import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/home/navigation-bar";
import HeroSection from "./pages/home/hero-section";
import ImpactSection from "./pages/home/impact-section";
import FeaturesGrid from "./pages/home/features-grid-component";
import TestimonialsSection from "./pages/home/testimonial-section";
import CTASection from "./pages/home/call-to-action";
import Footer from "./pages/home/footer";

// Import page components
import ExplorePage from "./pages/explore/page";
import ScannerPage from "./pages/scanner/page";
import ChatbotPage from "./pages/chatbot/page";
import StationsPage from "./pages/stations/page";
import MarketplacePage from "./pages/marketplace/page";
import TipsPage from "./pages/tips/page";
import AboutPage from "./pages/about/page";
import ProjectsPage from "./pages/projects/page";
import GetInvolvedPage from "./pages/get-involved/get-involved";

// Home page component
function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/scanner" element={<ScannerPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/stations" element={<StationsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
