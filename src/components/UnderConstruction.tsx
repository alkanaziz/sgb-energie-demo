import Link from "next/link";
import { FaTools, FaArrowLeft } from "react-icons/fa";

interface UnderConstructionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  availableDate?: string;
  listItems?: string[];
  contactEmail?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title,
  description = "Diese Seite befindet sich derzeit im Aufbau und wird in Kürze verfügbar sein.",
  icon = <FaTools className="h-10 w-10" />,
  availableDate = "2025",
  listItems = [],
  contactEmail,
}) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-[15vh]">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#94C11F] text-white">
            {icon}
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#002B5C] md:text-4xl">
            {title}
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#94C11F]"></div>
          <p className="mb-6 max-w-2xl text-lg text-slate-700">{description}</p>

          {availableDate && (
            <div className="my-8 flex flex-wrap items-center justify-center gap-6">
              <div className="rounded-lg bg-[#94C11F] p-3 text-white">
                Verfügbar im {availableDate}
              </div>
            </div>
          )}
        </div>

        {(listItems.length > 0 || contactEmail) && (
          <div className="mb-12 overflow-hidden rounded-xl bg-white p-8 shadow-lg">
            {listItems.length > 0 && (
              <>
                <h2 className="mb-4 text-xl font-semibold text-[#002B5C]">
                  Was Sie hier bald finden können:
                </h2>
                <ul className="mx-auto mb-6 flex max-w-xl flex-col gap-3 text-left text-slate-700">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mt-1 mr-2 text-[#94C11F]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {contactEmail && (
              <div className="mt-8 rounded-lg bg-slate-50 p-6">
                <h3 className="mb-3 text-lg font-medium text-[#002B5C]">
                  Fragen oder Anfragen?
                </h3>
                <p className="mb-4 text-slate-700">
                  Kontaktieren Sie uns gerne direkt:
                </p>
                <div className="mx-auto max-w-xs rounded-md bg-[#002B5C] p-3 text-white">
                  {contactEmail}
                </div>
              </div>
            )}
          </div>
        )}

        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[#002B5C] px-6 py-3 text-white transition-all hover:bg-[#001a38] hover:shadow-lg"
        >
          <FaArrowLeft className="mr-2" /> Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
