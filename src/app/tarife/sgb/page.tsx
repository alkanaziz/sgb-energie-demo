import { FaBolt } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function SgbTarife() {
  return (
    <UnderConstruction
      title="SGB TARIFE IN ENTWICKLUNG"
      description="Unsere SGB Tarife-Seite wird derzeit entwickelt. Hier finden Sie bald detaillierte Informationen zu unseren Stromtarifen und Angeboten."
      icon={<FaBolt className="h-10 w-10" />}
      availableDate="März 2025"
      listItems={[
        "Komplette Übersicht aller SGB Tarife",
        "Tarifrechner und Vergleichsmöglichkeiten",
        "Transparente Preisgestaltung",
        "Spezielle Angebote für Geschäftskunden",
        "Umweltfreundliche Energieoptionen",
      ]}
      contactEmail="tarife@sgb-energie.de"
    />
  );
}
