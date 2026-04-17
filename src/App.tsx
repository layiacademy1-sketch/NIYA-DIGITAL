import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [view, setView] = useState<'home' | 'catalogue'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black scroll-smooth">
      <Navbar onHome={() => setView('home')} />
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onShowCatalogue={() => setView('catalogue')} />
            </motion.div>
          ) : (
            <motion.div
              key="catalogue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Catalogue onBack={() => setView('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
