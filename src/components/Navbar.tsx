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
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">
          N
        </div>
        <span className="text-xl font-bold tracking-tighter">NIA DIGITAL</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#home" className="hover:text-white transition-colors">Accueil</a>
        <a href="#gift" className="hover:text-white transition-colors">Cadeau</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
      </div>

      <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-black transition-all">
        Contact
      </Button>
    </motion.nav>
  );
}
