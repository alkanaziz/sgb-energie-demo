import Image from "next/image";
import Link from "next/link";
import { FaTools, FaHardHat, FaArrowLeft } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

export default function Referenzen() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-[15vh]">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F] text-white">
            <FaTools className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#002B5C] md:text-4xl">
            SEITE IN BEARBEITUNG
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#94C11F]"></div>
          <p className="mb-6 max-w-2xl text-lg text-slate-700">
            Wir arbeiten derzeit intensiv an der Entwicklung dieser Seite, um
            Ihnen bald umfangreiche Informationen über unsere Referenzen
            präsentieren zu können.
          </p>
          <div className="my-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center rounded-lg bg-slate-200 p-3 text-slate-700">
              <FaHardHat className="mr-2" />
              <span>Entwicklung läuft</span>
            </div>
            <div className="rounded-lg bg-[#94C11F] p-3 text-white">
              Verfügbar bald
            </div>
          </div>
        </div>

        <div className="mb-12 overflow-hidden rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-[#002B5C]">
            Was Sie hier bald finden können:
          </h2>
          <ul className="mx-auto mb-6 flex max-w-xl flex-col gap-3 text-left text-slate-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Erfolgsgeschichten unserer Kunden
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Detaillierte Fallstudien aus verschiedenen Branchen
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Kundenbewertungen und Testimonials
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Statistiken und Einsparungspotenziale
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Partner-Netzwerk und Kooperationen
            </li>
          </ul>
          <div className="mx-auto size-32 rounded-full bg-[#94C11F] text-white">
            <MdConstruction className="mx-auto mt-6 h-32 w-32" />
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[#002B5C] px-6 py-3 text-white transition-all hover:bg-[#001a38] hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2" /> Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
