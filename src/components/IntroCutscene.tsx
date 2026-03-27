import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const IntroCutscene = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "tagline" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2500);
    const t3 = setTimeout(onComplete, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        initial={{ background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)" }}
        animate={{ background: "linear-gradient(135deg, hsl(145,63%,32%) 0%, hsl(0,78%,50%) 100%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        style={{ display: phase === "exit" ? "none" : undefined }}
      >
        <motion.img
          src={logo}
          alt="Super Bazaar Hypermarket"
          className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {phase === "tagline" && (
          <motion.p
            className="mt-6 text-xl md:text-3xl font-semibold tracking-wide"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Everyday Essentials, Delivered Fast
          </motion.p>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroCutscene;
