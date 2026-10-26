import { type FC } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`Projets Sélectionnés · ${padIndex(total)}`}
      title={
        <>
          Des projets conçus,{" "}
          <span className="text-gradient">déployés &amp; éprouvés.</span>
        </>
      }
      hint={["Défiler", "Épinglé"]}
    />
  </div>
);
