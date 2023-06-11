import AppFeatureSection from "@/components/client/AppFeaturesSection";
import Header from "@/components/client/Header";
import HomeHeroSection from "@/components/client/HomeHeroSection";
import PricingSection from "@/components/client/PricingSection";
import Footer from "@/components/client/Footer";

export default function Home() {
  return (
    <main className="home-page-wrapper">
      <Header />
      <HomeHeroSection />
      <AppFeatureSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
