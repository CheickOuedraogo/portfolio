"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-12 w-full max-w-4xl"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        À propos de moi
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>
      <p className="text-base leading-relaxed text-neutral-200 md:text-lg">
        Diplômé en <span className="font-semibold text-white">Informatique</span> et actuellement en préparation d&apos;un <span className="font-semibold text-white">Master en Data Science</span>.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-300">
        Passionné par la conception de produits numériques utiles, l&apos;exploration de l&apos;intelligence artificielle et la manière dont la technologie peut résoudre des problématiques concrètes du quotidien. Mes centres d&apos;intérêt s&apos;étendent du <span className="text-white">développement logiciel</span> au <span className="text-white">machine learning</span> et à l&apos;<span className="text-white">Internet des Objets (IoT)</span>.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-300">
        J&apos;aime transformer les idées en projets opérationnels, expérimenter les nouvelles technologies et faire évoluer constamment mes compétences. Pour moi, le développement va bien au-delà de l&apos;écriture de code : il s&apos;agit de comprendre les enjeux en profondeur, de concevoir des solutions efficaces et d&apos;avoir un réel impact.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400 italic">
        Toujours curieux d&apos;apprendre, de collaborer et de relever de nouveaux défis.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Me contacter</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>Découvrir mes projets</span>
        </a>
      </div>
    </motion.div>
  );
};
