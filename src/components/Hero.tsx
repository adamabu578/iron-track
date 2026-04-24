"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center bg-[#143d30] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* We use a gradient to blend the left side into dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#143d30] via-[#143d30]/80 to-transparent z-10" />
        {/* We use another gradient for the bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#143d30] via-transparent to-transparent z-10" />
        
        <Image
          src="/gym_hero_man_1777047425007.png"
          alt="Muscular trainer in premium gym"
          fill
          className="object-cover object-right md:object-center opacity-80"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        {/* Left Content */}
        <div className="max-w-3xl mt-24 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              AI-Powered
              <br />
              Body & Gym
              <br />
              <span className="text-[#22c55e] relative inline-block mt-2 md:mt-0">Tracker.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-zinc-300 max-w-2xl leading-relaxed font-medium drop-shadow-md"
          >
            Track your workouts, analyze your form, and optimize your gains using state-of-the-art artificial intelligence. The future of fitness is entirely data-driven.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <button className="px-8 py-3.5 border-2 border-[#22c55e] text-white font-bold tracking-wider rounded-sm hover:bg-[#22c55e] hover:text-[#143d30] transition-all duration-300">
              START TRACKING
            </button>
          </motion.div>
        </div>

        {/* Carousel controls - visually represented for aesthetic */}
        <div className="hidden lg:flex items-center gap-4 mt-16 text-white/50">
           <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
           </button>
           <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
           </button>
        </div>
      </div>
    </section>
  );
}
