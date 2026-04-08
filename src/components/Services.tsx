import { motion } from "motion/react";
import { Instagram, Music2, Ghost, Globe, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Développement Instagram",
    description: "Stratégie de croissance, branding, contenu viral et gestion de communauté pour exploser vos stats.",
    icon: Instagram,
    color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
    textColor: "text-white",
    glow: "rgba(225, 48, 108, 0.3)",
    delay: 0.1
  },
  {
    title: "Croissance TikTok",
    description: "Création de contenu viral, maîtrise de l'algorithme et stratégies de monétisation avancées.",
    icon: Music2,
    color: "from-black via-zinc-900 to-zinc-800",
    accent: "border-tiktok-accent",
    glow: "rgba(255, 0, 80, 0.2)",
    delay: 0.2,
    isTikTok: true
  },
  {
    title: "Stratégie Snapchat",
    description: "Audience, visibilité et engagement. Apprenez à transformer vos stories en machine à cash.",
    icon: Ghost,
    color: "from-[#FFFC00] to-[#FFE000]",
    textColor: "text-black",
    glow: "rgba(255, 252, 0, 0.2)",
    delay: 0.3
  },
  {
    title: "Création de sites web",
    description: "Sites professionnels, tunnels de vente haute conversion et branding digital sur mesure.",
    icon: Globe,
    color: "from-blue-600 to-blue-400",
    textColor: "text-white",
    glow: "rgba(0, 112, 243, 0.3)",
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Nos Services Premium
          </motion.h2>
          <p className="text-white/60 text-lg">
            Des solutions sur mesure pour chaque plateforme afin de maximiser votre impact et vos revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
            >
              <Card 
                className={`group relative h-full overflow-hidden border-white/5 bg-zinc-900/50 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 flex flex-col`}
                style={{ boxShadow: `0 0 40px -20px ${service.glow}` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-7 h-7 ${service.isTikTok ? 'text-tiktok-accent' : ''}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* TikTok specific glitch effect */}
                {service.isTikTok && (
                  <div className="absolute top-0 right-0 w-1 h-full bg-tiktok-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
