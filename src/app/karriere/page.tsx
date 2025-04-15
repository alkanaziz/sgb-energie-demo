import { FaBriefcase } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function Karriere() {
  const listItems = [
    "Aktuelle Stellenangebote in den Bereichen Energie, Vertrieb und Technik",
    "Einblicke in unsere Unternehmenskultur und -werte",
    "Mitarbeitervorteile und Entwicklungsmöglichkeiten",
    "Bewerbungsprozess und Anforderungsprofile",
    "Berichte unserer Mitarbeiter über ihren Arbeitsalltag",
  ];

  return (
    <UnderConstruction
      title="KARRIEREBEREICH IN ENTWICKLUNG"
      description="Wir gestalten derzeit unseren Karrierebereich, um Ihnen bald spannende Einblicke und Karrieremöglichkeiten bei SGB Energie GmbH zu bieten."
      icon={<FaBriefcase className="h-10 w-10" />}
      listItems={listItems}
      contactEmail="karriere@sgb-energie.de"
    />
  );
}
