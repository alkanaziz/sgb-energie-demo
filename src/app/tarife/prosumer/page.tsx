import { FaSolarPanel, FaExchangeAlt } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function ProsumerTarif() {
  return (
    <UnderConstruction
      title="PROSUMER TARIF IN ENTWICKLUNG"
      description="Der PROSUMER Tarif ist eine maßgeschneiderte Lösung für Unternehmen mit Photovoltaikanlagen, die sowohl Strom verbrauchen als auch erzeugen. Dieser innovative Tarif basiert vollständig auf dem Spotmarkt und bietet sowohl günstige Konditionen für den Strombezug als auch eine attraktive Rückspeisevergütung für den eingespeisten Solarstrom."
      icon={<FaSolarPanel className="h-10 w-10" />}
      listItems={[
        "Speziell für Kunden mit PV-Anlagen konzipiert",
        "Nur für Strom verfügbar",
        "Bezug und Einspeisung am Spotmarkt",
        "Attraktive Rückspeisevergütung für eingespeisten Solarstrom",
        "Transparente Abrechnung des Strombezugs und der Einspeisung",
        "Optimale Lösung für Unternehmen, die Energie produzieren und verbrauchen",
      ]}
      contactEmail="prosumer@sgb-energie.de"
    />
  );
}
