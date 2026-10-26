import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Minimaliste Pomodoro",
    category: "Productivité & Web App",
    description:
      "Une application de minuterie Pomodoro minimaliste et apaisante, conçue pour améliorer la concentration, rythmer les sessions de travail et éliminer les distractions.",
    subDescription: [
      "Minuteur interactif basé sur la méthode Pomodoro alternant sessions de focus et temps de pause.",
      "Interface épurée et moderne pensée pour une expérience utilisateur zen et sans encombrement.",
      "Entièrement responsive, accessible et optimisé pour le travail quotidien sur tous les appareils.",
    ],
    href: "https://minimaliste-pomodoro.vercel.app/",
    logo: "",
    image: "",
    accent: "from-coral/40 to-royal/10",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Portfolio Interactif",
    category: "Site Web & Vitrine Numérique",
    description:
      "Conception et développement de mon portfolio moderne, réactif et animé avec Next.js, React, TypeScript et Three.js.",
    subDescription: [
      "Développement full-stack moderne avec Next.js et TypeScript.",
      "Animations interactives et expérience visuelle 3D soignée avec Motion et Three.js.",
      "Architecture modulaire et responsive prête à accueillir de futurs travaux en IA et IoT.",
    ],
    href: "https://portfolio-seven-tau-f0hb8b802f.vercel.app/",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };

export const PREVIEW_WINDOW = 1;
