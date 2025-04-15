"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MdOutlinePhone } from "react-icons/md";
import { TbClockHour9 } from "react-icons/tb";
import Image from "next/image";

interface MenuItem {
  name: string;
  path?: string;
  subItems?: MenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setOpenDropdowns({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdowns({});
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => {
      // Eğer tıklanan menü zaten açıksa, tüm menüleri kapat
      if (prev[name]) {
        return {};
      }
      // Değilse, sadece tıklanan menüyü aç, diğerlerini kapat
      return { [name]: true };
    });
  };

  const menuItems: MenuItem[] = [
    {
      name: "TARIFE",
      subItems: [
        { name: "SGB TARIFE", path: "/tarife/sgb" },
        { name: "FLEX", path: "/tarife/flex" },
        { name: "PORTFOLIO", path: "/tarife/portfolio" },
        { name: "PARETO", path: "/tarife/pareto" },
        { name: "PROSUMER", path: "/tarife/prosumer" },
      ],
    },
    { name: "ENERGIEBERATUNG", path: "/energieberatung" },
    { name: "REFERENZEN", path: "/referenzen" },
    {
      name: "UNTERNEHMEN",
      subItems: [
        { name: "Vision | Vorteile", path: "/#" },
        { name: "Connect GmbH", path: "/#" },
        { name: "Energie GmbH", path: "/#" },
        { name: "Energiehandel GmbH", path: "/#" },
        { name: "Solution GmbH", path: "/#" },
        { name: "Metering GmbH", path: "/#" },
        { name: "Shared Services Center GmbH", path: "/#" },
      ],
    },
    { name: "KARRIERE", path: "/karriere" },
  ];

  // Helper function to check if a path is active
  const isActivePath = (path: string | undefined) => {
    if (!path) return false;
    return pathname === path;
  };

  const DropdownMenu = ({ item }: { item: MenuItem }) => {
    if (!item.subItems) return null;

    return (
      <div
        className={`absolute top-[10vh] left-1/2 mx-auto w-full max-w-7xl -translate-x-1/2 bg-slate-100 py-2 shadow-lg transition-all duration-300 ease-in-out ${item.name === "UNTERNEHMEN" ? "grid grid-cols-3 gap-2" : ""}`}
      >
        {item.subItems.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.path || "#"}
            className={`block px-4 py-2 text-sm text-slate-900 transition-all duration-200 hover:bg-slate-200 hover:pl-6 hover:font-medium ${item.name === "UNTERNEHMEN" ? "hover:pl-4" : ""}`}
            onClick={() => setOpenDropdowns({})}
          >
            {subItem.name}
            <span
              className={`absolute inset-x-0 -bottom-1 h-0.5 transform transition-transform duration-300 ${
                isActivePath(subItem.path)
                  ? "scale-x-100 bg-[#94C11F]"
                  : "scale-x-0 bg-[#94C11F] group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        ))}
      </div>
    );
  };

  const MobileDropdownMenu = ({ item }: { item: MenuItem }) => {
    if (!item.subItems) return null;

    return (
      <div className="ml-4 flex flex-col space-y-2">
        {item.subItems.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.path || "#"}
            className="transition-all duration-200 hover:pl-2 hover:font-medium hover:text-[#94C11F]"
            onClick={() => {
              setIsMenuOpen(false);
              setOpenDropdowns({});
            }}
          >
            {subItem.name}
            <span
              className={`absolute inset-x-0 -bottom-1 h-0.5 transform bg-[#94C11F] transition-transform duration-300 ${
                isActivePath(subItem.path)
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 flex w-full flex-col bg-slate-900 text-white shadow-lg"
    >
      <div className="flex h-[10vh] items-center justify-between px-4 lg:mx-auto lg:w-full lg:max-w-7xl">
        <div className="w-40">
          <Link href="/">
            <Image
              src="/assets/SGB-Energie-Logo-white_web-2.png"
              alt="SGB Energy Logo"
              width={100}
              height={40}
              className="transition-opacity duration-200 hover:opacity-90"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-end lg:flex lg:w-full lg:flex-col">
          <div className="flex items-center gap-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <button
                    className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      openDropdowns[item.name]
                        ? "font-semibold text-[#94C11F]"
                        : "text-white hover:text-[#7A9F19]"
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {openDropdowns[item.name] ? (
                      <FaChevronUp className="h-3 w-3 transition-transform duration-200" />
                    ) : (
                      <FaChevronDown className="h-3 w-3 transition-transform duration-200" />
                    )}
                    {item.name}
                    <span
                      className={`absolute inset-x-3 -bottom-1 h-0.5 transform bg-[#94C11F] transition-transform duration-300 ${
                        openDropdowns[item.name]
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </button>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActivePath(item.path)
                        ? "bg-green-50 font-semibold text-[#94C11F]"
                        : "text-white hover:text-[#7A9F19]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-3 -bottom-1 h-0.5 transform bg-[#94C11F] transition-transform duration-300 ${
                        isActivePath(item.path)
                          ? "scale-x-0"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col items-end justify-end">
              <Link
                href="/#"
                className="bg-[#94C11F] px-4 py-2 text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-[#7A9F19] hover:shadow-lg"
              >
                KUNDENPORTAL
              </Link>
              <div className="flex flex-col items-end justify-end text-sm text-white">
                <div className="mt-2 hidden flex-col items-end text-xs text-white lg:flex">
                  <span className="flex items-center gap-1 font-medium">
                    <MdOutlinePhone className="h-4 w-4" />
                    +49 (0) 8142 65 25 300
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <TbClockHour9 className="h-4 w-4" />
                    Mo- Fr: 09:00 - 18:00 Uhr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dropdown Menu */}
          {Object.keys(openDropdowns).length > 0 && (
            <div className="w-full">
              {menuItems.map(
                (item) =>
                  openDropdowns[item.name] && (
                    <DropdownMenu key={item.name} item={item} />
                  ),
              )}
            </div>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#"
            className="bg-[#94C11F] px-4 py-2 text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-[#7A9F19] hover:shadow-lg lg:hidden"
          >
            KUNDENPORTAL
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 transition-all duration-200 hover:text-[#7A9F19] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[10vh] right-0 left-0 bg-slate-100 shadow-lg transition-all duration-300 ease-in-out lg:hidden">
          <div className="flex flex-col space-y-4 px-5 py-4 text-slate-900">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col space-y-2">
                {item.subItems ? (
                  <>
                    <button
                      className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                        openDropdowns[item.name]
                          ? "font-semibold text-[#94C11F]"
                          : "text-slate-900 hover:text-[#7A9F19]"
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {openDropdowns[item.name] ? (
                        <FaChevronUp className="absolute -left-1 h-3 w-3 transition-transform duration-200" />
                      ) : (
                        <FaChevronDown className="absolute -left-1 h-3 w-3 transition-transform duration-200" />
                      )}
                      <span>{item.name}</span>
                      <span
                        className={`absolute inset-x-3 -bottom-1 h-0.5 transform bg-[#94C11F] transition-transform duration-300 ${
                          openDropdowns[item.name]
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </button>
                    {openDropdowns[item.name] && (
                      <MobileDropdownMenu item={item} />
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActivePath(item.path)
                        ? "font-semibold text-[#94C11F]"
                        : "text-slate-900 hover:text-[#7A9F19]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-0.5 transform bg-[#94C11F] transition-transform duration-300 ${
                        isActivePath(item.path)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
