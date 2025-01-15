"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Star,
  DownloadIcon,
  Monitor,
  Smartphone,
  ComputerIcon as Steam,
  ComputerIcon as Windows,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pcRequirements = {
  minimum: [
    { name: "OS", spec: "Windows 10 64-bit" },
    { name: "Processor", spec: "Intel Core i5-6600K / AMD Ryzen 5 1600" },
    { name: "Memory", spec: "16 GB RAM" },
    { name: "Graphics", spec: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB" },
    { name: "Storage", spec: "50 GB available space" },
    { name: "Network", spec: "Broadband Internet connection" },
  ],
  recommended: [
    { name: "OS", spec: "Windows 10/11 64-bit" },
    { name: "Processor", spec: "Intel Core i7-8700K / AMD Ryzen 7 3700X" },
    { name: "Memory", spec: "32 GB RAM" },
    { name: "Graphics", spec: "NVIDIA RTX 3060 Ti / AMD RX 6700 XT" },
    { name: "Storage", spec: "50 GB SSD" },
    { name: "Network", spec: "Broadband Internet connection" },
  ],
};

const mobileRequirements = {
  minimum: [
    { name: "OS", spec: "Android 8.0+ / iOS 13+" },
    { name: "Processor", spec: "Snapdragon 665 / A11 Bionic" },
    { name: "Memory", spec: "4 GB RAM" },
    { name: "Storage", spec: "2 GB available space" },
    { name: "Network", spec: "Stable Internet connection" },
  ],
  recommended: [
    { name: "OS", spec: "Android 10.0+ / iOS 14+" },
    { name: "Processor", spec: "Snapdragon 855+ / A13 Bionic" },
    { name: "Memory", spec: "8 GB RAM" },
    { name: "Storage", spec: "4 GB available space" },
    { name: "Network", spec: "5G/WiFi connection" },
  ],
};

const statistics = [
  { icon: DownloadIcon, value: "5M+", label: "Downloads" },
  { icon: Users, value: "2M+", label: "Active Players" },
  { icon: Star, value: "4.8", label: "Rating" },
  { icon: Trophy, value: "500K+", label: "Tournament Players" },
];

export default function Download() {
  return (
    <section id="download" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-wider font-orbitron text-red-500 text-center mb-12"
        >
          SYSTEM REQUIREMENTS
        </motion.h2>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-black/30 rounded-lg backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="pc" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="pc"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <Monitor className="mr-2" /> PC Requirements
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              <Smartphone className="mr-2" /> Mobile Requirements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-orbitron">
                  Minimum Requirements
                </h3>
                <div className="space-y-4">
                  {pcRequirements.minimum.map((req) => (
                    <div
                      key={req.name}
                      className="border-b border-gray-700 pb-2"
                    >
                      <span className="font-orbitron text-red-500">
                        {req.name}:
                      </span>
                      <span className="ml-2 text-gray-400">{req.spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-orbitron">
                  Recommended Requirements
                </h3>
                <div className="space-y-4">
                  {pcRequirements.recommended.map((req) => (
                    <div
                      key={req.name}
                      className="border-b border-gray-700 pb-2"
                    >
                      <span className="font-orbitron text-red-500">
                        {req.name}:
                      </span>
                      <span className="ml-2 text-gray-400">{req.spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-orbitron">
                  Minimum Requirements
                </h3>
                <div className="space-y-4">
                  {mobileRequirements.minimum.map((req) => (
                    <div
                      key={req.name}
                      className="border-b border-gray-700 pb-2"
                    >
                      <span className="font-orbitron text-red-500">
                        {req.name}:
                      </span>
                      <span className="ml-2 text-gray-400">{req.spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-orbitron">
                  Recommended Requirements
                </h3>
                <div className="space-y-4">
                  {mobileRequirements.recommended.map((req) => (
                    <div
                      key={req.name}
                      className="border-b border-gray-700 pb-2"
                    >
                      <span className="font-orbitron text-red-500">
                        {req.name}:
                      </span>
                      <span className="ml-2 text-gray-400">{req.spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold font-orbitron mb-8">
            DOWNLOAD NOW
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-[#171a21] hover:bg-[#2a475e] text-white px-8"
            >
              <Steam className="mr-2" /> Get on Steam
            </Button>
            <Button
              size="lg"
              className="bg-[#00a4ef] hover:bg-[#0078d4] text-white px-8"
            >
              <Windows className="mr-2" /> Windows Store
            </Button>
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
      </div>
    </section>
  );
}
