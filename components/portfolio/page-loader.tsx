"use client";

import { useEffect, useState, type FC } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HERO_ROLE, USERNAME } from "@/constants/hero-constants";

const VISIBLE_MS = 1000;
const SESSION_KEY = "intro-played";

export const PageLoader: FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let delay = VISIBLE_MS;
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        delay = 0;
      }
    } catch {
      // ignore
    }

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
      setVisible(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030412]"
        >
          {/* Subtle soft ambient glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-royal/25 blur-[110px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Clean minimalist text */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <h2 className="text-base font-bold tracking-wider text-white">
                {USERNAME}
              </h2>
              <p className="text-[10px] md:text-xs font-normal tracking-[0.25em] uppercase text-neutral-400">
                {HERO_ROLE}
              </p>
            </div>

            {/* Ultra-slim, chic progress line */}
            <div className="relative mt-2 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-royal via-coral to-aqua"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
