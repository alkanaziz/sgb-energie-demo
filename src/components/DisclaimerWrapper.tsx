"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import DisclaimerModal from "./DisclaimerModal";

// Context oluşturma
type DisclaimerContextType = {
  showDisclaimer: boolean;
  setShowDisclaimer: (show: boolean) => void;
};

const DisclaimerContext = createContext<DisclaimerContextType>({
  showDisclaimer: false,
  setShowDisclaimer: () => {},
});

// Hook oluşturma
export const useDisclaimer = () => useContext(DisclaimerContext);

export default function DisclaimerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setShowDisclaimer(true);
    setIsInitialized(true);
  }, []);

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  // İlklendirme tamamlanana kadar bekle
  if (!isInitialized) {
    return null;
  }

  return (
    <DisclaimerContext.Provider value={{ showDisclaimer, setShowDisclaimer }}>
      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={handleCloseDisclaimer}
      />
      {children}
    </DisclaimerContext.Provider>
  );
}
