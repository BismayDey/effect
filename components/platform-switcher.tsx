"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ComputerIcon as Steam,
  ComputerIcon as Windows,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pcFeatures = [
  "4K Ultra HD Graphics",
  "Ray Tracing Support",
  "Uncapped Frame Rates",
  "Custom Key Bindings",
  "Ultra-wide Monitor Support",
  "Discord Integration",
];

const mobileFeatures = [
  "Optimized Touch Controls",
  "60 FPS Gameplay",
  "Cloud Save Support",
  "Offline Mode",
  "Custom HUD Layout",
  "Voice Chat",
];

export default function PlatformSwitcher() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-wider font-orbitron text-red-500 mb-4">
            CHOOSE YOUR PLATFORM
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience RAGE EFFECT across multiple platforms with
            cross-progression
          </p>
        </motion.div>

        <Tabs defaultValue="pc" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="pc"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <Monitor className="mr-2" /> PC Gaming
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <Smartphone className="mr-2" /> Mobile Gaming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-orbitron mb-4">PC Features</h3>
                <ul className="space-y-4">
                  {pcFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="h-2 w-2 bg-red-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-6">
                  <Button className="bg-[#171a21] hover:bg-[#2a475e] text-white">
                    <Steam className="mr-2" /> Get on Steam
                  </Button>
                  <Button className="bg-[#00a4ef] hover:bg-[#0078d4] text-white">
                    <Windows className="mr-2" /> Windows Store
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <img
                  src="https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg"
                  alt="PC Gameplay"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-orbitron mb-4">Mobile Features</h3>
                <ul className="space-y-4">
                  {mobileFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="h-2 w-2 bg-red-500 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://play.google.com/store/search?q=rage+effect+mobile&c=apps&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-16"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-[9/16] rounded-lg overflow-hidden max-w-[300px] mx-auto"
              >
                <img
                  src="https://sjc.microlink.io/WZ8baQx_1b_QXdDGogNInFe_JAKEe9n1R42pDNA0-gCQIi2XxtrM4M6Xvv6CTb008mRgP3mtORKNrp0F6Ez4Qg.jpeg"
                  alt="Mobile Gameplay"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-orbitron mb-8 text-red-500">
            CROSS-PLATFORM FEATURES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-orbitron mb-4">Cross-Save</h4>
              <p className="text-gray-400">
                Continue your progress across all devices
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-orbitron mb-4">Cross-Play</h4>
              <p className="text-gray-400">
                Play with friends regardless of platform
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-orbitron mb-4">Unified Account</h4>
              <p className="text-gray-400">
                Access your inventory and progress everywhere
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
