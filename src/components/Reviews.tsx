import { motion } from "motion/react";

const reviews = [
  {
    name: "Alexis",
    image: "https://image.noelshack.com/fichiers/2026/16/1/1776101834-665d74eeb9cba-img-0014-1.jpg"
  },
  {
    name: "Julien",
    image: "https://image.noelshack.com/fichiers/2026/16/1/1776101868-665d76c04fbff-img-0016-1.jpg"
  },
  {
    name: "Guillaume",
    image: "https://image.noelshack.com/fichiers/2026/16/1/1776102369-665d75ace4507-img-0012-1.jpg"
  },
  {
    name: "Ousmane",
    image: "https://image.noelshack.com/fichiers/2026/16/1/1776102410-665b0339d43f6-img-0010.jpg"
  },
  {
    name: "Esteban",
    image: "https://image.noelshack.com/fichiers/2026/16/1/1776102454-665b02f541a70-img-0007-1.jpg"
  }
];

export default function Reviews() {
  return (
    <div className="w-full max-w-4xl mt-8 overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-xl md:text-2xl font-black text-gold-gradient uppercase tracking-[0.3em]">Avis de nos membres</h2>
      </div>
      
      <div className="relative flex overflow-hidden py-4">
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{
            x: [0, -800],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate for infinite loop */}
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-56 md:w-80">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 glass hover:border-[#BF953F]/50 transition-colors">
                <p className="text-center font-black text-white mb-3 uppercase tracking-widest text-xs md:text-base">{review.name}</p>
                <img 
                  src={review.image} 
                  alt={`Avis de ${review.name}`} 
                  className="w-full h-auto rounded-xl shadow-2xl border border-[#BF953F]/20"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
