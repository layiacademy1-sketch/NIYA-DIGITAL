import { motion } from "motion/react";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORMATIONS } from "../lib/constants";

interface CatalogueProps {
  onBack: () => void;
}

export default function Catalogue({ onBack }: CatalogueProps) {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group mb-8"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Retour à l'accueil</span>
        </button>

        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
          NOS <span className="text-gold-gradient">FORMATIONS</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl font-medium">
          Découvrez notre catalogue complet de formations pour maîtriser les réseaux sociaux et générer des revenus.
        </p>
      </motion.div>

      {/* Formations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {FORMATIONS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:border-gold-moving/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl"
          >
            <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-6 border border-white/10">
              <img 
                src={item.img} 
                alt={item.text} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-black text-[#FCF6BA] uppercase tracking-wider mb-3 leading-tight">
              {item.text}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
              {item.description}
            </p>
            <Button 
              onClick={() => window.open("https://wa.me/33756858255?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20" + item.text, "_blank")}
              className="w-full h-12 rounded-full bg-white/10 hover:bg-gold-moving text-white hover:text-black hover:shadow-[0_0_30px_rgba(191,149,63,0.3)] transition-all uppercase font-black tracking-widest text-xs"
            >
              Postuler à ce module
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
