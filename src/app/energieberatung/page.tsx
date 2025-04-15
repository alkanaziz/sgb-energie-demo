import { FaLightbulb } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function Energieberatung() {
  const listItems = [
    "Energieeffizienzanalyse für Unternehmen und Industrie",
    "Maßgeschneiderte Konzepte für Energieeinsparungen",
    "Individuelle Beratung zu erneuerbaren Energien",
    "Fördermittelberatung für Energieeffizienzmaßnahmen",
    "Entwicklung eines nachhaltigen Energiemanagements",
  ];

  return (
    <UnderConstruction
      title="IHRE ENERGIE-OPTIMIERUNG DURCH BERATUNG"
      description="Unsere Energieberatungsseite wird derzeit umfassend entwickelt, um Ihnen bald detaillierte Einblicke in unsere Beratungsleistungen zu geben."
      icon={<FaLightbulb className="h-10 w-10" />}
      listItems={listItems}
      contactEmail="beratung@sgb-energie.de"
    />
  );
}
