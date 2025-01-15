"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log("Submitted email:", email);
    toast({
      title: "Signed up!",
      description:
        "You've successfully signed up for the Rage Effect newsletter.",
      open: true, // Keep only the required properties
    });
    setEmail("");
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-red-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron glitch-text">
            JOIN THE RAGE
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Sign up now to receive exclusive updates, early access, and special
            rewards!
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/50 text-white border-red-700 focus:border-red-500"
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-transform"
            >
              Sign Up
            </Button>
          </form>

          <div className="mt-12 flex flex-col items-center">
            <p className="text-xl font-orbitron mb-4">Available Now</p>
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
