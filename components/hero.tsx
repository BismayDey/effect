"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]); // Maps scrollY to a range

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <motion.div
          className="parallax h-full"
          style={{
            backgroundImage:
              "url(https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg)",
            y, // Use the transformed value for parallax effect
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center space-y-8 px-4 mt-16 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg sm:text-xl md:text-2xl tracking-wider text-red-500 font-orbitron"
          >
            PREPARE FOR WAR
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[120px] font-bold tracking-wider leading-none font-orbitron glitch-text">
            <motion.span
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block hover:text-red-500 transition-colors duration-300"
            >
              RAGE
            </motion.span>
            <br />
            <motion.span
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block hover:text-red-500 transition-colors duration-300"
            >
              EFFECT
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-orbitron tracking-wider hover:scale-105 transition-transform"
            >
              PLAY NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-orbitron tracking-wider hover:scale-105 transition-transform"
            >
              WATCH TRAILER
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
