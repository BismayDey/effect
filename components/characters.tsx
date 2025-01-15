"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const characters = [
  {
    name: "REAPER",
    role: "Assault",
    description: "A ruthless soldier with unparalleled combat skills.",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
  },
  {
    name: "PHANTOM",
    role: "Stealth",
    description: "A master of infiltration and covert operations.",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
  },
  {
    name: "TITAN",
    role: "Tank",
    description: "A heavily armored juggernaut with devastating firepower.",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
  },
];

export default function Characters() {
  const [activeCharacter, setActiveCharacter] = useState(0);

  return (
    <section
      id="characters"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-wider font-orbitron text-red-500 text-center mb-12"
        >
          CHOOSE YOUR FIGHTER
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <Image
              src={characters[activeCharacter].image}
              alt={characters[activeCharacter].name}
              width={500}
              height={700}
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8"
          >
            {characters.map((character, index) => (
              <div
                key={character.name}
                className={`p-4 border ${
                  index === activeCharacter
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded-lg cursor-pointer transition-all duration-300 hover:border-red-500`}
                onClick={() => setActiveCharacter(index)}
              >
                <h3 className="text-2xl font-bold font-orbitron mb-2">
                  {character.name}
                </h3>
                <p className="text-red-500 mb-2">{character.role}</p>
                <p className="text-gray-400">{character.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
