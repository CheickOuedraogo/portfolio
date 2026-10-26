import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-seven-tau-f0hb8b802f.vercel.app"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_DESCRIPTION =
  "Diplômé en Informatique et étudiant en Master Data Science, passionné par le développement de produits utiles, l'IA et l'IoT.";

export const SITE_TAGLINE =
  "Software Engineer · Développeur Web, Mobile (Flutter), APIs (FastAPI, Laravel) & Data Science.";

export const OG_IMAGE = "/og.jpg";
export const OG_IMAGE_ALT = `Portfolio de ${HERO_NAME}, ${HERO_ROLE}`;
export const OG_LOCALE = "fr_FR";

export const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  HERO_NAME,
  "Software Engineer",
  "Ingénieur Logiciel",
  "Data Science",
  "Intelligence Artificielle",
  "Machine Learning",
  "IoT",
  "Flutter",
  "FastAPI",
  "Laravel",
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  HERO_LOCATION,
  "Burkina Faso",
];

export const HOME_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const HOME_DESCRIPTION =
  "Portfolio de Cheick Hamed Bonaventure Ouedraogo, Software Engineer au Burkina Faso. Solutions logicielles, Flutter, FastAPI, Laravel et Data Science.";

export const ADMIN_TITLE = "Messages de contact";

export const ADMIN_DESCRIPTION =
  "Tableau de bord privé pour les messages reçus via le formulaire.";

export const ADMIN_LOGIN_TITLE = "Connexion";

export const ADMIN_LOGIN_DESCRIPTION =
  "Connexion à l'espace d'administration.";

export const SITE_SECTIONS = [
  {
    name: "Accueil",
    hash: "#home",
    description: `${HERO_NAME}, ${HERO_ROLE} concevant des produits web et mobiles évolutifs.`,
  },
  {
    name: "À propos",
    hash: "#about",
    description: `Parcours, compétences et façon de travailler de ${HERO_NAME}, ${HERO_ROLE} basé à ${HERO_LOCATION}.`,
  },
  {
    name: "Services",
    hash: "#services",
    description:
      "Applications web, applications mobiles multiplateformes, APIs et accompagnement technique.",
  },
  {
    name: "Projets",
    hash: "#work",
    description:
      "Sélection de projets et réalisations numériques.",
  },
  {
    name: "Contact",
    hash: "#contact",
    description: `Contactez ${HERO_NAME} pour vos projets web, mobile ou missions freelance.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
