"use client";

import React from "react";
import { useDisclaimer } from "./DisclaimerWrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export default function DisclaimerButton() {
  const { setShowDisclaimer } = useDisclaimer();

  return (
    <button
      onClick={() => setShowDisclaimer(true)}
      className="fixed right-6 bottom-6 z-50 flex cursor-pointer items-center gap-2 rounded-full bg-gray-800 px-4 py-3 text-sm text-white shadow-lg transition-all duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
      aria-label="Hinweis anzeigen"
    >
      <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
      <span className="font-medium sm:inline">Hinweis</span>
    </button>
  );
}
