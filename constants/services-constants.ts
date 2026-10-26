import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Applications Web",
    description:
      "Des applications Next.js, React & TypeScript modernes, performantes, ergonomiques et optimisées pour le SEO.",
    icon: "/assets/logos/typescript.svg",
    bullets: [
      "Interfaces dynamiques & réactives (React, Next.js)",
      "Typage rigoureux et maintenable avec TypeScript",
      "Rendu hybride, rapidité d'affichage & accessibilité",
    ],
  },
  {
    id: 2,
    title: "Applications Mobiles (Flutter)",
    description:
      "Développement d'applications mobiles multiplateformes pour Android et iOS avec Flutter.",
    icon: "/assets/logos/flutter.svg",
    bullets: [
      "Applications Android & iOS à partir d'une seule base de code",
      "Design soigné, animations fluides et réactivité native",
      "Intégration d'APIs REST, offline-first & notifications",
    ],
  },
  {
    id: 3,
    title: "APIs & Backends (FastAPI & Laravel)",
    description:
      "Conception et déploiement d'APIs sécurisées et hautement performantes avec FastAPI (Python), Laravel (PHP) et Node.js.",
    icon: "/assets/logos/fastapi.svg",
    bullets: [
      "APIs RESTful avec FastAPI, Laravel et Express/Node.js",
      "Modélisation de bases de données relationnelles (SQL) & NoSQL",
      "Authentification robuste, microservices & documentation OpenAPI",
    ],
  },
  {
    id: 4,
    title: "Data Science, IA & IoT",
    description:
      "Valorisation de données, intégration de modèles de Machine Learning et conception de solutions connectées (IoT).",
    icon: "/assets/logos/python.svg",
    bullets: [
      "Traitement, analyse exploratoire et modélisation de données",
      "Intégration de briques d'Intelligence Artificielle & ML",
      "Systèmes communicants et solutions IoT intelligentes",
    ],
  },
];
