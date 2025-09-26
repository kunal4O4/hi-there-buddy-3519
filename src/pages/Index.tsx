import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PolaroidMemories from "@/components/PolaroidMemories";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PolaroidMemories />
      <EventsSection />
      <Footer />
    </main>
  );
};

export default Index;
