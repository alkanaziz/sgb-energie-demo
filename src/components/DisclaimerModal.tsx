"use client";

import React from "react";

interface DisclaimerModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70">
      <div className="max-h-[90vh] w-11/12 max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <div className="mx-auto">
          <h2 className="mb-5 text-center text-2xl font-semibold text-gray-800">
            Hinweis
          </h2>

          <h3 className="mt-4 mb-2 text-xl font-medium text-gray-700">
            Über das Projekt:
          </h3>
          <p className="mb-4 leading-relaxed text-gray-600">
            Dieses Projekt wurde von Alkan Aziz entwickelt, um ein Beispiel der
            Website von SGB Energie GmbH zu erstellen. Es wurde ausschließlich
            zu Präsentationszwecken erstellt und verfolgt keine kommerziellen
            Absichten.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium text-gray-700">
            Rechtlicher Hinweis:
          </h3>
          <p className="mb-4 leading-relaxed text-gray-600">
            Alle in diesem Projekt verwendeten Inhalte und Designs sind von der
            Website von SGB Energie GmbH inspiriert. Das Projekt dient zu
            Bildungs- und Bewertungszwecken und steht in keiner offiziellen
            Verbindung mit SGB Energie GmbH. Es darf ohne die Erlaubnis von SGB
            Energie GmbH nicht kommerziell genutzt oder verbreitet werden.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium text-gray-700">
            Kontakt:
          </h3>
          <p className="mb-4 leading-relaxed text-gray-600">
            Bei Fragen oder Feedback können Sie mich gerne kontaktieren:
            alkanaziz@gmail.com
          </p>

          <button
            onClick={onClose}
            className="mx-auto mt-6 block rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
