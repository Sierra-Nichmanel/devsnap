import Navbar from "@/components/ux/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <Features />

      <Testimonials />

      <CTA />

      <Footer />
    </main>
  );
}
