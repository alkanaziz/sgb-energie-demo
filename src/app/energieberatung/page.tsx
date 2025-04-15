import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaLightbulb, FaChartLine } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineEco,
  MdOutlineHandshake,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";

export default function Energieberatung() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-[15vh]">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F] text-white">
            <FaLightbulb className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#002B5C] md:text-4xl">
            IHRE ENERGIE-OPTIMIERUNG DURCH BERATUNG
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#94C11F]"></div>
          <p className="mb-6 max-w-2xl text-lg text-slate-700">
            Unsere Energieberatungsseite wird derzeit umfassend entwickelt, um
            Ihnen bald detaillierte Einblicke in unsere Beratungsleistungen zu
            geben.
          </p>
          <div className="my-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center rounded-lg bg-slate-200 p-3 text-slate-700">
              <MdOutlineAnalytics className="mr-2" />
              <span>Beratungsangebote in Arbeit</span>
            </div>
            <div className="rounded-lg bg-[#94C11F] p-3 text-white">
              Verfügbar im April 2025
            </div>
          </div>
        </div>

        <div className="mb-12 overflow-hidden rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-center text-2xl font-semibold text-[#002B5C]">
            Ihre Vorteile auf einen Blick
          </h2>

          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F]/20">
                <FaChartLine className="h-12 w-12 text-[#94C11F]" />
              </div>
              <h4 className="mb-3 text-xl font-medium text-[#002B5C]">
                Identifizieren IHRER Einsparpotenziale
              </h4>
              <p className="text-center text-slate-700">
                Wir analysieren Ihre Energieverbräuche und zeigen Ihnen, wie Sie
                durch den Einsatz effizienter Technologien und die Optimierung
                bestehender Systeme Ihre Betriebskosten deutlich senken können.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F]/20">
                <MdOutlineHandshake className="h-12 w-12 text-[#94C11F]" />
              </div>
              <h4 className="mb-3 text-xl font-medium text-[#002B5C]">
                Individuelle Beratung
              </h4>
              <p className="text-center text-slate-700">
                Auf Basis der Analyse entwickeln wir maßgeschneiderte
                Optimierungsmaßnahmen und stellen sicher, dass die Maßnahmen
                perfekt auf Ihr Unternehmen abgestimmt sind, um langfristig
                Kosten zu senken.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F]/20">
                <GiProgression className="h-12 w-12 text-[#94C11F]" />
              </div>
              <h4 className="mb-3 text-xl font-medium text-[#002B5C]">
                Zukunftssicheres Energie-management
              </h4>
              <p className="text-center text-slate-700">
                Unsere Beratung hilft Ihnen, Ihre Energieversorgung
                wirtschaftlich und nachhaltig zu gestalten, sodass Ihr
                Unternehmen langfristig wettbewerbsfähig bleibt.
              </p>
            </div>
          </div>

          <div className="mx-auto my-16 max-w-4xl rounded-xl bg-slate-50 p-8">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-[#94C11F]/10 md:mr-6">
                <Image
                  src="/assets/avatar-placeholder.png"
                  alt="Karun Sakhiravi"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="mb-4 text-lg text-slate-700 italic">
                  „Bei der SGB steht der Kunde und seine Bedürfnisse immer im
                  Fokus."
                </p>
                <p className="font-medium text-[#002B5C]">Karun Sakhiravi</p>
                <p className="text-sm">SGB ENERGIE</p>
                <p className="text-sm text-slate-600">
                  Leitung Partner Management D|A|CH
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-8 text-center text-2xl font-semibold text-[#002B5C]">
            Ihre Schritte zur effizienteren Energieberatung
          </h2>

          <ul className="mx-auto mb-8 flex max-w-xl flex-col gap-3 text-left text-slate-700">
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Energieeffizienzanalyse für Unternehmen und Industrie
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Maßgeschneiderte Konzepte für Energieeinsparungen
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Individuelle Beratung zu erneuerbaren Energien
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Fördermittelberatung für Energieeffizienzmaßnahmen
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
              Entwicklung eines nachhaltigen Energiemanagements
            </li>
          </ul>

          <div className="mt-8 rounded-lg bg-slate-50 p-6">
            <h3 className="mb-3 text-lg font-medium text-[#002B5C]">
              Schon jetzt an einer Energieberatung interessiert?
            </h3>
            <p className="mb-4 text-slate-700">
              Kontaktieren Sie uns für eine persönliche Beratung:
            </p>
            <div className="mx-auto max-w-xs rounded-md bg-[#002B5C] p-3 text-white">
              beratung@sgb-energie.de
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[#002B5C] px-6 py-3 text-white transition-all hover:bg-[#001a38] hover:shadow-lg"
          >
            <FaArrowLeft className="mr-2" /> Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
