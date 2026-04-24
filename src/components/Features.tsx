"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "FORM CORRECTION",
    desc: "Real-time AI analysis of your lifting mechanics to prevent injuries and maximize muscle engagement.",
    image: "/trainer_man_1_1777047440863.png"
  },
  {
    id: 2,
    title: "AUTO LOGGING",
    desc: "Automatically logs every rep, set, and rest period without you ever having to manually enter data.",
    image: "/trainer_woman_1_1777047454302.png"
  },
  {
    id: 3,
    title: "PROGRESS PREDICTION",
    desc: "Advanced algorithms predict your 1RM and suggest progressive overload to ensure continuous growth.",
    image: "/trainer_man_2_1777047476578.png"
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#22c55e] font-bold tracking-[0.2em] text-sm mb-4 uppercase">Smart Tracking</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            AI-DRIVEN
            <br />
            WORKOUT INSIGHTS
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Stop guessing and start optimizing. Our computer vision and machine learning models analyze your every move to provide actionable feedback, ensuring you lift safely and hit your goals faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-zinc-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 tracking-wide">{program.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
