import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass m-4 rounded-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gold-moving rounded-lg flex items-center justify-center font-black text-black text-xl shadow-lg">
          N
        </div>
        <span className="text-xl font-black tracking-tighter text-white">NIYA DIGITAL</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white/70">
        <a href="#home" className="hover:text-[#FCF6BA] transition-colors uppercase tracking-widest">Accueil</a>
        <a href="#gift" className="hover:text-[#FCF6BA] transition-colors uppercase tracking-widest">Cadeau</a>
      </div>
    </motion.nav>
  );
}
