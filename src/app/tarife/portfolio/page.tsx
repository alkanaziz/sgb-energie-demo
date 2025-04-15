import { FaBalanceScale, FaPercentage } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function PortfolioTarif() {
  return (
    <UnderConstruction
      title="PORTFOLIO TARIF IN ENTWICKLUNG"
      description="Der PORTFOLIO-Tarif setzt sich aus 70% Fixpreis und 30% Spot-Marktpreisen zusammen und bietet langfristige Preisstabilität sowie gleichzeitig Einsparpotenziale dank des dynamischen Börsenstrompreises."
      icon={<FaBalanceScale className="h-10 w-10" />}
      availableDate="Mai 2025"
      listItems={[
        "Idealer Preismix aus Sicherheit und Flexibilität",
        "Verfügbar für Strom und Gas",
        "Chancen aus dem Spot-Markt nutzen",
        "Absicherung durch Termin-Markt",
        "Ausgewogenes Verhältnis zwischen Risiko und Preisstabilität",
      ]}
      contactEmail="portfolio@sgb-energie.de"
    />
  );
}
