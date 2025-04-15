import { FaBolt, FaChartLine } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function FlexTarif() {
  return (
    <UnderConstruction
      title="FLEX TARIF IN ENTWICKLUNG"
      description="Unser FLEX Tarif basiert auf dem Spotmarkt, der täglich neu festgelegt wird und sich nach den Schwankungen an der Energiebörse orientiert. Dieser Preis wird durch Angebot und Nachfrage bestimmt und kann daher stark variieren."
      icon={<FaChartLine className="h-10 w-10" />}
      availableDate="April 2025"
      listItems={[
        "Reines Spot-Markt Produkt für optimale Preistransparenz",
        "Verfügbar für Strom und Gas",
        "Monatlich kündbar für maximale Flexibilität",
        "Detaillierte Preisübersichten und Prognosen",
        "Echtzeit-Updates zu Marktentwicklungen",
      ]}
      contactEmail="flex@sgb-energie.de"
    />
  );
}
