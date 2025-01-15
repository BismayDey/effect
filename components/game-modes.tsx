"use client";

import { motion } from "framer-motion";
import { Sword, Shield, Users, Zap } from "lucide-react";

const gameModes = [
  {
    icon: Sword,
    title: "DEATHMATCH",
    description:
      "Every player for themselves in this high-octane free-for-all battle",
  },
  {
    icon: Shield,
    title: "CAPTURE THE FLAG",
    description: "Strategic team play to capture and defend your team's flag",
  },
  {
    icon: Users,
    title: "TEAM DEATHMATCH",
    description:
      "Work together to eliminate the opposing team and claim victory",
  },
  {
    icon: Zap,
    title: "RAGE ROYALE",
    description:
      "Battle it out in a shrinking arena until only one player remains",
  },
];

export default function GameModes() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-wider font-orbitron text-red-500 text-center mb-12"
        >
          GAME MODES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gameModes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-red-500/20 transition-shadow duration-300"
            >
              <mode.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-orbitron">
                {mode.title}
              </h3>
              <p className="text-gray-400">{mode.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
