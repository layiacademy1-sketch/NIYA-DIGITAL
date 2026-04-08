import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GiftSection from "./components/GiftSection";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <GiftSection />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
