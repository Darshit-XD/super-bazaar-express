import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-groceries.jpg";

const HeroBanner = () => (
  <section className="relative overflow-hidden bg-gradient-hero">
    <div className="container py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 text-primary-foreground text-sm font-medium backdrop-blur-sm">
          🔥 Fresh Deals Today!
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
          Fresh Groceries,<br />
          <span className="opacity-80">Delivered to Your Door</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-md mx-auto md:mx-0">
          Shop from thousands of products at Jebel Ali's favorite hypermarket. Quality guaranteed.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-background text-primary font-semibold text-base hover:bg-background/90 transition-colors ripple-effect"
        >
          Shop Now <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
      <motion.div
        className="flex-1 max-w-lg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={heroImg} alt="Fresh groceries" className="rounded-2xl shadow-2xl w-full" width={1920} height={800} />
      </motion.div>
    </div>

    {/* Trust bar */}
    <div className="bg-background/10 backdrop-blur-sm border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-wrap justify-center gap-8 text-primary-foreground/90 text-sm">
        <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free Delivery Over AED 100</span>
        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Quality Guaranteed</span>
        <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Best Prices Daily</span>
      </div>
    </div>
  </section>
);

export default HeroBanner;
