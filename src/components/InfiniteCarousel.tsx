import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { 
    text: "CRÉATION ASSOCIATION", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776461218-chatgpt-image-17-avr-2026-23-26-20.jpg",
    description: "Apprenez les étapes clés pour créer et structurer votre association. De la rédaction des statuts à la gestion administrative, maîtrisez tout le processus pour donner vie à votre projet associatif."
  },
  { 
    text: "FORMATION INSTAGRAM", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776460664-chatgpt-image-17-avr-2026-23-17-36.jpg",
    description: "Apprenez à développer une communauté engagée sur Instagram. Maîtrisez les algorithmes, la création de contenu percutant et les stratégies de monétisation pour transformer vos abonnés en clients."
  },
  { 
    text: "FORMATION TIKTOK", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776460996-photo-2026-04-17-23-23-10.jpg",
    description: "Maîtrisez les codes de TikTok pour devenir viral. Apprenez à créer des vidéos percutantes, à utiliser les tendances et à monétiser votre audience sur la plateforme la plus en vogue du moment."
  },
  { 
    text: "FORMATION SNAPCHAT", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776460154-photo-2026-04-16-03-50-41.jpg",
    description: "Découvrez les secrets de la monétisation sur Snapchat. Apprenez à créer du contenu engageant et à utiliser les outils publicitaires pour générer des revenus sur l'un des réseaux les plus dynamiques."
  },
  { 
    text: "Création de site", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776460400-chatgpt-image-17-avr-2026-23-13-00.jpg",
    description: "Apprenez à concevoir des sites web professionnels et optimisés pour la conversion. Maîtrisez les outils modernes pour créer des vitrines performantes qui captent l'attention de vos clients."
  },
  { 
    text: "FORMATION AI FRUIT", 
    img: "https://image.noelshack.com/fichiers/2026/16/5/1776461862-chatgpt-image-17-avr-2026-23-37-29.jpg",
    description: "Apprenez à utiliser l'intelligence artificielle pour générer des contenus visuels et textuels d'une qualité exceptionnelle. Une formation innovante pour booster votre créativité et votre productivité grâce aux derniers outils d'IA."
  },
];

export default function InfiniteCarousel() {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  // Tripling the items to ensure smooth infinite loop
  const tripledItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 group cursor-grab active:cursor-grabbing">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex w-max gap-6 px-6"
        animate={{
          x: [0, "-33.33%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
        dragElastic={0.1}
        whileDrag={{ cursor: "grabbing" }}
        onDragStart={() => {
          // Pause logic is naturally handled by framer-motion when dragging
        }}
      >
        {tripledItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 px-6 py-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center gap-5 hover:border-gold-moving/50 transition-all duration-500 hover:scale-[1.02] relative group/card"
          >
            {/* Photo 9:9 (Square) (TOP) */}
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src={item.img} 
                alt={item.text} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Title / Name (Below Photo) */}
            <span className="text-[10px] md:text-xs font-black text-[#FCF6BA] uppercase tracking-[0.2em] whitespace-nowrap text-center drop-shadow-md">
              {item.text}
            </span>

            {/* "En savoir plus" Button (Bottom) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
              }}
              className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-white hover:bg-gold-moving hover:text-black transition-all duration-300 w-full justify-center group/btn"
            >
              <Info className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
              En savoir plus
            </button>
          </div>
        ))}
      </motion.div>

      {/* Modal for Explanation */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[3rem] p-8 md:p-12 z-[201] overflow-hidden shadow-[0_0_100px_rgba(191,149,63,0.15)]"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-gold-moving shadow-[0_0_30px_rgba(191,149,63,0.3)]">
                  <img src={selectedItem.img} alt={selectedItem.text} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-6 tracking-tight">
                  <span className="text-gold-gradient">{selectedItem.text}</span>
                </h3>
                
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  {selectedItem.description}
                </p>

                <Button 
                  onClick={() => {
                    setSelectedItem(null);
                    window.open("https://wa.me/33756858255?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20" + selectedItem.text, "_blank");
                  }}
                  className="w-full h-14 rounded-full bg-gold-moving text-black font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                >
                  Postuler à ce module
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
