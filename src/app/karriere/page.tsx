import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaUserTie, FaArrowLeft } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Karriere() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-[15vh]">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F] text-white">
            <FaBriefcase className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#002B5C] md:text-4xl">
            KARRIEREBEREICH IN ENTWICKLUNG
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#94C11F]"></div>
          <p className="mb-6 max-w-2xl text-lg text-slate-700">
            Wir gestalten derzeit unseren Karrierebereich, um Ihnen bald
            spannende Einblicke und Karrieremöglichkeiten bei SGB Energie GmbH
            zu bieten.
          </p>
          <div className="my-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center rounded-lg bg-slate-200 p-3 text-slate-700">
              <FaUserTie className="mr-2" />
              <span>Karriereportal kommt bald</span>
            </div>
            <div className="rounded-lg bg-[#94C11F] p-3 text-white">
              Verfügbar im Mai 2025
            </div>
          </div>
        </div>

        <div className="mb-12 overflow-hidden rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-[#002B5C]">
            Was Sie hier in Kürze finden werden:
          </h2>
          <ul className="mx-auto mb-6 flex max-w-xl flex-col gap-3 text-left text-slate-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Aktuelle Stellenangebote in den Bereichen Energie, Vertrieb und
              Technik
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Einblicke in unsere Unternehmenskultur und -werte
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Mitarbeitervorteile und Entwicklungsmöglichkeiten
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Bewerbungsprozess und Anforderungsprofile
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Berichte unserer Mitarbeiter über ihren Arbeitsalltag
            </li>
          </ul>

          <div className="mt-8 rounded-lg bg-slate-50 p-6">
            <h3 className="mb-3 text-lg font-medium text-[#002B5C]">
              Interessiert an einer Karriere bei SGB Energie?
            </h3>
            <p className="mb-4 text-slate-700">
              Senden Sie uns gerne jetzt schon eine Initiativbewerbung an:
            </p>
            <div className="mx-auto max-w-xs rounded-md bg-[#002B5C] p-3 text-white">
              karriere@sgb-energie.de
            </div>
          </div>

          <div className="mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full bg-[#94C11F]/20">
            <MdWork className="h-24 w-24 text-[#94C11F]" />
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
