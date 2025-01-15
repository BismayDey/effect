"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Characters from "@/components/characters";
import Download from "@/components/download";
import GameModes from "@/components/game-modes";
import Weapons from "@/components/weapons";
import CallToAction from "@/components/call-to-action";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import ScrollProgressBar from "@/components/scroll-progress-bar";
import MobilePreview from "@/components/mobile-preview";
import PlatformSwitcher from "@/components/platform-switcher";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        if (scrollY > sectionTop) {
          section.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Hero />
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <Features />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <GameModes />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <Characters />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <Weapons />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <PlatformSwitcher />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <MobilePreview />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <Download />
      </section>
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="scroll-reveal"
      >
        <CallToAction />
      </section>
      <ScrollToTopButton />
    </main>
  );
}
