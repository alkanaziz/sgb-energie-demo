import { FaCogs, FaIndustry } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function ParetoTarif() {
  return (
    <UnderConstruction
      title="PARETO TARIF IN ENTWICKLUNG"
      description="Der PARETO Tarif richtet sich an Unternehmen ab 4,5 GWh und nutzt eine clevere Kombination aus Terminmarkt, Spotmarkt, Base- und Peakbänder, Monats-, Quartals- oder Jahrestranchen und OTC-Limit-Order."
      icon={<FaCogs className="h-10 w-10" />}
      availableDate="Juni 2025"
      listItems={[
        "Maßgeschneiderte Lösung für Großverbraucher",
        "Verfügbar für Strom und Gas",
        "Individuelle Beschaffungsstrategie",
        "Optimale Marktchancen durch flexible Komponenten",
        "Kombination aus Terminmarkt und Spotmarkt",
        "Base- und Peakbänder nach Bedarf",
        "Flexible Tranchen (Monats-, Quartals- oder Jahresbasis)",
      ]}
      contactEmail="pareto@sgb-energie.de"
    />
  );
}
