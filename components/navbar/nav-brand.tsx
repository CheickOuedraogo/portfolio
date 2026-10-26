"use client";

import { type FC, type MouseEvent } from "react";
import { USERNAME } from "@/constants/hero-constants";
import { goToAnchor } from "@/helpers/scroll-helpers";

export const NavBrand: FC = () => (
  <a
    href="#home"
    aria-label="Accueil"
    onClick={(event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      goToAnchor("#home");
    }}
    className="group flex items-center text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
  >
    <span className="text-gradient font-bold">{USERNAME}</span>
  </a>
);
