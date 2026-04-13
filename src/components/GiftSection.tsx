import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Gift } from "lucide-react";

export default function GiftSection() {
  return (
    <section id="gift" className="pt-6 pb-6 relative overflow-hidden">
      <div className="container px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2rem] p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="flex-1 text-left">
            <Badge className="bg-gold-moving text-black border-none mb-4 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 w-fit">
              <Gift className="w-3 h-3" />
              Cadeau offert
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-white uppercase italic">
              Le guide ultime pour se lancer dans le <span className="text-gold-gradient">marketing digital</span>
            </h2>
            
            <div className="mb-6" />

            <a href="https://docdro.id/Nfp211Z" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 rounded-full bg-gold-moving text-black hover:scale-105 transition-transform text-xs md:text-sm font-black uppercase tracking-wider group shadow-[0_10px_30px_rgba(191,149,63,0.3)]">
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Télécharger gratuitement
              </Button>
            </a>
          </div>

          <div className="flex-1 relative group perspective-1000">
            {/* 3D-like eBook Visual */}
            <motion.div
              whileHover={{ rotateY: -20, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 w-full max-w-[280px] mx-auto aspect-[3/4] bg-gradient-to-br from-zinc-800 to-black rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#BF953F]/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FCF6BA]/10 blur-3xl" />
              
              <div className="mt-auto" style={{ transform: "translateZ(50px)" }}>
                <div className="w-10 h-10 bg-gold-moving rounded-lg mb-3 flex items-center justify-center font-black text-black text-lg shadow-lg">N</div>
              </div>

              {/* Spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 to-transparent border-r border-white/10" />
              
              {/* Pages effect on the right */}
              <div className="absolute right-0 top-2 bottom-2 w-1 bg-white/10 rounded-full" />
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#BF953F]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#BF953F]/20 transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
