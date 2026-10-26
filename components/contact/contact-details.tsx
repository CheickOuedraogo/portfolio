"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import {
  CONTACT_EMAIL,
  HERO_LOCATION,
} from "@/constants/portfolio-constants";
import { ContactInfoCard } from "./contact-info-card";

export const ContactDetails: FC = () => (
  <motion.div {...revealProps()} className="lg:col-span-5">
    <p className="text-eyebrow">Contact</p>
    <h2 className="text-heading mt-3">
      Une idée en tête ? <br />
      <span className="text-gradient">Concrétisons-la.</span>
    </h2>
    <p className="mt-4 leading-relaxed text-neutral-400">
      Que vous lanciez un nouveau produit, fassiez évoluer une solution
      existante ou souhaitiez débloquer un projet, contactez-moi et je vous répondrai
      sous 24 heures.
    </p>

    <div className="mt-8 space-y-4">
      <ContactInfoCard
        icon="✉"
        label="Email"
        value={CONTACT_EMAIL}
        href={`mailto:${CONTACT_EMAIL}`}
        gradient="from-coral/30 to-lavender/30"
      />
      <ContactInfoCard
        icon="⌖"
        label="Localisation"
        value={`${HERO_LOCATION} · Disponible en télétravail`}
        gradient="from-aqua/30 to-mint/30"
      />
      <ContactInfoCard
        icon="⏱"
        label="Délai de réponse"
        value="Généralement sous 24 heures"
        gradient="from-royal/30 to-fuchsia/30"
      />
    </div>
  </motion.div>
);
