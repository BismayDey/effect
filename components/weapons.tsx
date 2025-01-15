"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const weapons = [
  {
    name: "Plasma Rifle",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
    description: "High-energy weapon capable of melting through armor",
    stats: { damage: 80, range: 70, fireRate: 60 },
  },
  {
    name: "Quantum Shotgun",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
    description: "Short-range devastator with interdimensional pellets",
    stats: { damage: 90, range: 30, fireRate: 40 },
  },
  {
    name: "Nano Blade",
    image:
      "https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg",
    description: "Melee weapon that can slice through any material",
    stats: { damage: 100, range: 10, fireRate: 80 },
  },
];

export default function Weapons() {
  const [activeWeapon, setActiveWeapon] = useState(0);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-wider font-orbitron text-red-500 text-center mb-12"
        >
          ARSENAL
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <Image
              src={weapons[activeWeapon].image || "/placeholder.svg"}
              alt={weapons[activeWeapon].name}
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {weapons.map((weapon, index) => (
              <div
                key={weapon.name}
                className={`p-4 border ${
                  index === activeWeapon ? "border-red-500" : "border-gray-700"
                } rounded-lg cursor-pointer transition-all duration-300 hover:border-red-500`}
                onClick={() => setActiveWeapon(index)}
              >
                <h3 className="text-2xl font-bold font-orbitron mb-2">
                  {weapon.name}
                </h3>
                <p className="text-gray-400 mb-4">{weapon.description}</p>
                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    <span className="text-red-500 font-bold">
                      {weapon.stats.damage}
                    </span>
                    <span className="text-sm text-gray-500">Damage</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-red-500 font-bold">
                      {weapon.stats.range}
                    </span>
                    <span className="text-sm text-gray-500">Range</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-red-500 font-bold">
                      {weapon.stats.fireRate}
                    </span>
                    <span className="text-sm text-gray-500">Fire Rate</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
