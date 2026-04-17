import { motion } from "motion/react";
import { Info } from "lucide-react";
import { FORMATIONS } from "../lib/constants";

export default function InfiniteCarousel() {
  // Tripling the items to ensure smooth infinite loop
  const tripledItems = [...FORMATIONS, ...FORMATIONS, ...FORMATIONS];

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
                window.open("https://wa.me/33756858255?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20formation%20" + item.text, "_blank");
              }}
              className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-white hover:bg-gold-moving hover:text-black transition-all duration-300 w-full justify-center group/btn"
            >
              <Info className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
              En savoir plus
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
