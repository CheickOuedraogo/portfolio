"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";

export const ServicesCtaCard: FC = () => (
  <motion.div
    {...revealProps()}
    className="glass gradient-border relative z-10 mt-24 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10"
  >
    <div>
      <p className="text-eyebrow mb-2">Vous avez un projet en tête ?</p>
      <h3 className="text-2xl font-bold md:text-3xl">
        Définissons-le ensemble.
      </h3>
      <p className="mt-2 max-w-xl text-neutral-400">
        Envoyez-moi votre brief et je vous répondrai sous 24 heures avec un plan réaliste,
        des délais précis et une estimation.
      </p>
    </div>
    <a href="#contact" className="btn-primary">
      <span>Discuter d&apos;un projet</span>
      <span aria-hidden>→</span>
    </a>
  </motion.div>
);
