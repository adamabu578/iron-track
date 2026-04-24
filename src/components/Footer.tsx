import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#143d30] text-zinc-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <Image 
                src="/logo.png" 
                alt="IRON TRACK AI Logo" 
                width={140} 
                height={40} 
                className="group-hover:scale-105 transition-transform h-auto w-auto max-h-10"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              The ultimate AI body gym tracker. Transform your fitness data into tangible, measurable results.
            </p>
          </div>

          {/* Links Group 1 */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Features</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">AI Form Check</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Auto Logging</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Smart Analytics</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Wearable Sync</Link></li>
            </ul>
          </div>

          {/* Links Group 2 */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">API Access</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-[#22c55e] transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#22c55e] font-bold uppercase mb-6 tracking-wider">Stay In Touch</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for tips, news, and exclusive offers.</p>
            <div className="flex w-full bg-[#143d30] border border-zinc-800 rounded-sm overflow-hidden focus-within:border-[#22c55e] transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none"
              />
              <button className="px-4 py-3 text-[#22c55e] hover:bg-[#22c55e] hover:text-[#143d30] transition-colors font-bold text-sm">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50">
          <p className="text-xs">
            © {new Date().getFullYear()} IRON TRACK AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-zinc-500 hover:text-[#22c55e] transition-colors"><FaFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-zinc-500 hover:text-[#22c55e] transition-colors"><FaTwitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-zinc-500 hover:text-[#22c55e] transition-colors"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-zinc-500 hover:text-[#22c55e] transition-colors"><FaYoutube className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
