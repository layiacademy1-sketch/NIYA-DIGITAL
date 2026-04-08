import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Gift } from "lucide-react";

export default function GiftSection() {
  return (
    <section id="gift" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="flex-1 text-left">
            <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-1 text-sm rounded-full flex items-center gap-2 w-fit">
              <Gift className="w-4 h-4" />
              Cadeau offert
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Le guide ultime pour réussir sur <span className="text-tiktok-cyan">TikTok</span>
            </h2>
            
            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
              Découvrez les secrets de l'algorithme, comment créer du contenu viral et les stratégies exactes pour monétiser votre compte en un temps record.
            </p>

            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 text-lg font-bold group">
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Télécharger gratuitement
            </Button>
          </div>

          <div className="flex-1 relative group perspective-1000">
            {/* 3D-like eBook Visual */}
            <motion.div
              whileHover={{ rotateY: -20, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 w-full max-w-[350px] mx-auto aspect-[3/4] bg-gradient-to-br from-zinc-800 to-black rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-tiktok-accent/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-tiktok-cyan/20 blur-3xl" />
              
              <div className="mt-auto" style={{ transform: "translateZ(50px)" }}>
                <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center font-bold text-black text-xl shadow-lg">N</div>
                <h3 className="text-3xl font-black mb-2 tracking-tighter">TIKTOK MASTERY</h3>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold">Le Guide Complet 2024</p>
              </div>

              {/* Spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/50 to-transparent border-r border-white/10" />
              
              {/* Pages effect on the right */}
              <div className="absolute right-0 top-2 bottom-2 w-1 bg-white/10 rounded-full" />
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] -z-10 group-hover:bg-white/10 transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
