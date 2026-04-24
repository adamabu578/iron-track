"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 border-b border-white/5 bg-[#143d30]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-50">
          <Image 
            src="/logo.png" 
            alt="IRON TRACK AI Logo" 
            width={140} 
            height={40} 
            className="group-hover:scale-105 transition-transform h-auto w-auto max-h-8 md:max-h-12"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="text-white hover:text-[#22c55e] transition-colors">Home</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Features</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">AI Analysis</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Integrations</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Pricing</Link>
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="#"
            className="px-6 py-2.5 bg-[#22c55e] text-[#143d30] font-bold rounded-sm hover:bg-[#22c55e] transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#143d30] border-b border-white/10 flex flex-col px-6 py-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-center">
              <Link href="#" className="text-white hover:text-[#22c55e]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#" className="text-zinc-400 hover:text-[#22c55e]" onClick={() => setIsOpen(false)}>Features</Link>
              <Link href="#" className="text-zinc-400 hover:text-[#22c55e]" onClick={() => setIsOpen(false)}>AI Analysis</Link>
              <Link href="#" className="text-zinc-400 hover:text-[#22c55e]" onClick={() => setIsOpen(false)}>Integrations</Link>
              <Link href="#" className="text-zinc-400 hover:text-[#22c55e]" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link 
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-[#22c55e] text-[#143d30] font-bold rounded-sm inline-block mx-auto"
              >
                GET STARTED
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
