"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.png" 
            alt="IRON TRACK AI Logo" 
            width={160} 
            height={50} 
            className="group-hover:scale-105 transition-transform h-auto w-auto max-h-12"
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="text-white hover:text-[#22c55e] transition-colors">Home</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Features</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">AI Analysis</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Integrations</Link>
          <Link href="#" className="text-zinc-400 hover:text-[#22c55e] transition-colors">Pricing</Link>
        </div>

        {/* Auth Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="#"
            className="px-6 py-2.5 bg-[#22c55e] text-[#143d30] font-bold rounded-sm hover:bg-[#22c55e] transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          >
            GET THE APP
          </Link>
        </div>
      </div>
    </nav>
  );
}
