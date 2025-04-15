import { FaTools } from "react-icons/fa";
import UnderConstruction from "@/components/UnderConstruction";

export default function Referenzen() {
  const listItems = [
    "Erfolgsgeschichten unserer Kunden",
    "Detaillierte Fallstudien aus verschiedenen Branchen",
    "Kundenbewertungen und Testimonials",
    "Statistiken und Einsparungspotenziale",
    "Partner-Netzwerk und Kooperationen",
  ];

  return (
    <UnderConstruction
      title="SEITE IN BEARBEITUNG"
      description="Wir arbeiten derzeit intensiv an der Entwicklung dieser Seite, um Ihnen bald umfangreiche Informationen über unsere Referenzen präsentieren zu können."
      icon={<FaTools className="h-10 w-10" />}
      listItems={listItems}
    />
  );
}
