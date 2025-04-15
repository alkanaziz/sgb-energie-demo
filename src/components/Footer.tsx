import React from "react";
import Link from "next/link"; // Assuming you're using Next.js; for React Router, use "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 pt-10 pb-30 text-white md:pt-10 md:pb-5">
      <div className="container mx-auto px-4">
        {/* Social Media Section */}
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-medium">FOLGE UNS</h3>
          <div className="flex justify-center gap-4">
            <Link href="#" className="rounded-full bg-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#333"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link href="#" className="rounded-full bg-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#333"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
            <Link href="#" className="rounded-full bg-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#333"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* Company Info */}
          <div>
            <img
              src="/assets/SGB-Energie-Logo-white_web-2.png"
              alt="SGB Energie GmbH"
              className="mb-4 h-12"
            />
            <p className="font-medium">SGB Energie GmbH</p>
            <address className="text-slate-400 not-italic">
              <p>Industriestraße 29-31</p>
              <p>82194 Gröbenzell</p>
              <p className="mt-4">Mo- Fr: 09:00 – 18:00 Uhr</p>
              <p>+49 (0) 8142 65 25 300</p>
              <Link
                href="mailto:info@sgb-energie.de"
                className="mt-2 block hover:underline"
              >
                info@sgb-energie.de
              </Link>
            </address>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">TARIFE</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:underline">
                  SGB TARIFE
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FLEX
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  PARETO
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  PROSUMER
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">UNTERNEHMEN</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:underline">
                  Vision | Vorteile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Connect GmbH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Energie GmbH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Energiehandel GmbH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Solution GmbH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Metering GmbH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shared Services GmbH
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">ENERGIEBERATUNG</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  REFERENZEN
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  KARRIERE
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  KONTAKT
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  KUNDENPORTAL
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">RECHTLICHES</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Allgemeine Geschäftsbedingungen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Marktpartnerinformation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Stromkennzeichnung
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Strom- und Gaspreis-Bremse 2023
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-4 flex w-full flex-col items-center space-y-4 md:mt-0">
              <Link href="#" className="block">
                <img
                  src="/assets/Trustpilot_white.svg"
                  alt="Trustpilot"
                  className="w-40 md:w-20"
                />
              </Link>
              <Link href="#" className="block">
                <img
                  src="/assets/CrefoZert.png"
                  alt="CrefoZert"
                  className="w-40 md:w-20"
                />
              </Link>
              <Link href="#" className="block">
                <img
                  src="/assets/kununu_TopCompanyBadge_2025_RGB.png"
                  alt="Kununu Top Company 2025"
                  className="w-40 md:w-24"
                />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Copyright section */}
        <div className="text-slate-400">
          <p>2025 © SGB Energie GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
