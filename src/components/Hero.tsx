import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reviews from "./Reviews";
import GiftSection from "./GiftSection";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-10 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-900/10 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          {/* Badge moved down and gold effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 mb-6 px-6 py-2.5 rounded-full bg-gold-moving border border-white/20 flex items-center gap-3 shadow-[0_0_30px_rgba(191,149,63,0.4)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-black">DEVIENS UN EXPERT EN MARKETING DIGITAL</span>
          </motion.div>

          <div className="flex flex-col items-center gap-6 w-full">
            {/* First photo fixed presentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-2xl bg-gold-moving p-1.5 rounded-2xl shadow-[0_0_50px_rgba(191,149,63,0.3)]"
            >
              <div className="bg-black rounded-xl overflow-hidden">
                <img 
                  src="https://image.noelshack.com/fichiers/2026/16/1/1776098967-chatgpt-image-13-avr-2026-18-49-14.jpg" 
                  alt="Marketing Digital Visuel" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Text Content - Optimized for mobile */}
            <div className="mt-4 flex flex-col items-center px-4">
              <div className="relative mb-6 text-center">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block text-lg md:text-2xl font-medium text-white mb-3 tracking-wide italic font-serif"
                >
                  La première formation en France pour
                </motion.span>
                
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white uppercase italic">
                  Se lancer dans <br />
                  <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(191,149,63,0.2)]">Marketing</span> <br />
                  <span className="text-gold-gradient drop-shadow-[0_0_30px_rgba(191,149,63,0.2)]">Digital</span>
                </h1>

                {/* Decorative background element for title */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl -z-10" />
              </div>
              
              <p className="text-base md:text-xl text-white mb-6 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#BF953F]/50 pl-6 text-center md:text-left">
                Nous accompagnons les personnes qui souhaitent se lancer dans le marketing digital afin de générer des revenus grâce aux réseaux sociaux.
              </p>
            </div>

            {/* Price Display - Moved Below Description */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter flex items-start">
                497<span className="text-gold-gradient text-2xl md:text-4xl mt-2 ml-1">€</span>
              </div>
              <div className="px-6 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <p className="text-[10px] md:text-sm font-bold text-[#FCF6BA] uppercase tracking-[0.2em]">
                  Paiement en 4x possible
                </p>
              </div>
            </motion.div>

            {/* Button - Gold theme - Moved Up */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6">
              <a href="https://wa.me/33756858255?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-10 rounded-full bg-gold-moving text-black hover:scale-105 transition-transform text-sm md:text-base font-black uppercase tracking-wider shadow-[0_10px_30px_rgba(191,149,63,0.3)]">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Reviews Section */}
            <Reviews />

            {/* Gift Section - Moved here */}
            <GiftSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
