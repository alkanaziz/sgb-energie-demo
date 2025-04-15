import React from "react";
import UnderConstruction from "@/components/UnderConstruction";
import { FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Kontakt - SGB Energie",
  description:
    "Kontaktieren Sie SGB Energie für Ihre Energieanfragen und Kundenservice",
};

const KontaktPage = () => {
  return (
    <UnderConstruction
      title="Kontakt"
      description="Unsere neue Kontaktseite wird gerade entwickelt. Hier finden Sie bald alle Möglichkeiten, um mit uns in Verbindung zu treten."
      icon={<FaEnvelope className="h-10 w-10" />}
      listItems={[
        "Interaktives Kontaktformular für allgemeine Anfragen",
        "Direkte Kontaktmöglichkeiten für Neu- und Bestandskunden",
        "Kontaktdaten für Geschäftskunden und Kooperationspartner",
        "Standortinformationen mit interaktiver Karte",
        "Informationen zu Öffnungszeiten und Sprechstunden",
      ]}
      contactEmail="info@sgb-energie.de"
    />
  );
};

export default KontaktPage;
