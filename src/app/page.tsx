import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BestTrainers from "@/components/BestTrainers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#143d30] flex flex-col font-sans">
      <Navbar />
      <Hero />
      <Features />
      <BestTrainers />
      <Footer />
    </main>
  );
}
