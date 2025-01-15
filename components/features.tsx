"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Shield, Crosshair, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "TACTICAL COMBAT",
    description:
      "Master advanced weapon systems and strategic combat mechanics",
  },
  {
    icon: Shield,
    title: "DYNAMIC WARFARE",
    description:
      "Experience reactive battlefields that evolve with your choices",
  },
  {
    icon: Users,
    title: "MULTIPLAYER",
    description: "Engage in intense PvP battles and cooperative missions",
  },
  {
    icon: Zap,
    title: "RAGE MODE",
    description: "Unleash devastating abilities in high-stakes moments",
  },
];

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-orbitron text-red-500">
            ENTER THE BATTLEFIELD
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Immerse yourself in a world where tactical precision meets raw
            power.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group hover-glow"
              >
                <div className="p-6 bg-black border border-red-900/20 hover:border-red-600 transition-colors duration-300 h-full relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <feature.icon className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-4 font-orbitron group-hover:text-red-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
