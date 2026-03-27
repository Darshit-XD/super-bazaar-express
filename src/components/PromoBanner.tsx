import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PromoBanner = () => (
  <motion.section
    className="container py-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">Weekend Special! Up to 40% Off</h3>
          <p className="text-sm text-muted-foreground">On selected groceries and household items. Limited time offer.</p>
        </div>
      </div>
      <a
        href="/products"
        className="shrink-0 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors ripple-effect"
      >
        Shop Deals
      </a>
    </div>
  </motion.section>
);

export default PromoBanner;
