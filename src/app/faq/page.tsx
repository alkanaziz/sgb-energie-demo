import React from "react";
import UnderConstruction from "@/components/UnderConstruction";
import { FaQuestionCircle } from "react-icons/fa";

export const metadata = {
  title: "FAQ - SGB Energie",
  description:
    "Häufig gestellte Fragen zu SGB Energie und unseren Dienstleistungen",
};

const FAQPage = () => {
  return (
    <UnderConstruction
      title="FAQ - Häufig gestellte Fragen"
      description="Unsere FAQ-Seite befindet sich derzeit im Aufbau. Hier finden Sie bald Antworten auf die häufigsten Fragen zu unseren Energieprodukten und Dienstleistungen."
      icon={<FaQuestionCircle className="h-10 w-10" />}
      availableDate="Q2 2025"
      listItems={[
        "Informationen zu unseren verschiedenen Tarifen und deren Vorteile",
        "Antworten zu Abrechnungen und Zahlungsmöglichkeiten",
        "Erklärungen zum Lieferantenwechsel",
        "Tipps zum Energiesparen im Alltag",
        "Informationen zu Smart Metering und digitalen Lösungen",
      ]}
      contactEmail="faq@sgb-energie.de"
    />
  );
};

export default FAQPage;
