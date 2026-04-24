"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trainers = [
  {
    id: 1,
    name: "ATLAS",
    role: "STRENGTH AI",
    image: "/best_trainer_1_1777047493760.png"
  },
  {
    id: 2,
    name: "VALKYRIE",
    role: "MOBILITY AI",
    image: "/best_trainer_2_1777047508308.png"
  },
  {
    id: 3,
    name: "CHRONOS",
    role: "ENDURANCE AI",
    image: "/best_trainer_3_1777047527754.png"
  }
];

export default function BestTrainers() {
  return (
    <section className="w-full py-24 bg-[#143d30] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-zinc-400 font-bold tracking-[0.3em] text-xs mb-4 uppercase">Virtual Coaching</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            ELITE AI COACHES
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Train with our advanced AI personas, tailored to push you past your limits through intelligent, dynamic programming based on your real-time performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#143d30] via-[#143d30]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-1">{trainer.name}</h3>
                  <p className="text-[#22c55e] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                    {trainer.role}
                  </p>
                  
                  {/* Button that appears on hover */}
                  <div className="overflow-hidden">
                    <button className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-6 py-2 bg-[#22c55e] text-[#143d30] font-bold uppercase text-sm rounded-sm">
                      Get Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
