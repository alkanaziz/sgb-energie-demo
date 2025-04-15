import React from "react";
import UnderConstruction from "@/components/UnderConstruction";
import { FaNewspaper } from "react-icons/fa";

export const metadata = {
  title: "News - SGB Energie",
  description: "Aktuelle Nachrichten und Updates von SGB Energie",
};

const NewsPage = () => {
  return (
    <UnderConstruction
      title="News & Aktuelles"
      description="Unsere Newsseite befindet sich im Aufbau. Hier finden Sie bald aktuelle Informationen über SGB Energie, Branchennachrichten und Energiethemen."
      icon={<FaNewspaper className="h-10 w-10" />}
      listItems={[
        "Aktuelle Unternehmensnachrichten von SGB Energie",
        "Updates zu neuen Energieprodukten und Services",
        "Branchennews und Entwicklungen auf dem Energiemarkt",
        "Informationen zu nachhaltigen Energielösungen",
        "Blog-Beiträge zu Energieeffizienz und Energiewende",
        "Pressemitteilungen und Medienberichte",
      ]}
      contactEmail="presse@sgb-energie.de"
    />
  );
};

export default NewsPage;
