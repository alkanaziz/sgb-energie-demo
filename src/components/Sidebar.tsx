import Link from "next/link";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TfiAnnouncement, TfiEmail } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <nav className="fixed bottom-0 z-30 h-[10vh] w-full md:right-0 md:h-screen md:w-0">
      <div className="right-0 flex h-full items-center justify-between bg-[#94C11F] px-15 text-white md:fixed md:top-1/2 md:h-48 md:w-[56px] md:-translate-y-1/2 md:transform md:flex-col md:gap-8 md:bg-transparent md:px-3">
        <div className="flex h-[56px] w-[56px] items-center justify-center md:relative md:mb-8 md:w-full">
          <Link
            href="/news"
            className="group flex h-[56px] w-[56px] items-center justify-center rounded-full transition-all duration-500 ease-in-out md:absolute md:right-0 md:bg-gray-300 md:hover:w-40 md:hover:bg-gray-500"
          >
            <div className="flex w-full items-center justify-center gap-4 md:justify-start md:pl-3">
              <TfiAnnouncement className="h-8 w-8 min-w-[32px]" />
              <span className="hidden overflow-hidden md:inline-block md:w-0 md:font-extrabold md:opacity-0 md:transition-all md:duration-500 md:ease-in-out md:group-hover:w-auto md:group-hover:opacity-100">
                NEWS
              </span>
            </div>
          </Link>
        </div>

        <div className="flex h-[56px] w-[56px] items-center justify-center md:relative md:mb-8 md:w-full">
          <Link
            href="/kontakt"
            className="group flex h-[56px] w-[56px] items-center justify-center rounded-full transition-all duration-500 ease-in-out md:absolute md:right-0 md:bg-gray-300 md:hover:w-40 md:hover:bg-gray-500"
          >
            <div className="flex w-full items-center justify-center gap-4 md:justify-start md:pl-3">
              <TfiEmail className="h-8 w-8 min-w-[32px]" />
              <span className="hidden overflow-hidden md:inline-block md:w-0 md:font-extrabold md:opacity-0 md:transition-all md:duration-500 md:ease-in-out md:group-hover:w-auto md:group-hover:opacity-100">
                KONTAKT
              </span>
            </div>
          </Link>
        </div>

        <div className="flex h-[56px] w-[56px] items-center justify-center md:relative md:w-full">
          <Link
            href="/faq"
            className="group flex h-[56px] w-[56px] items-center justify-center rounded-full transition-all duration-500 ease-in-out md:absolute md:right-0 md:bg-gray-300 md:hover:w-40 md:hover:bg-gray-500"
          >
            <div className="flex w-full items-center justify-center gap-4 md:justify-start md:pl-3">
              <FaRegCircleQuestion className="h-8 w-8 min-w-[32px]" />
              <span className="hidden overflow-hidden md:inline-block md:w-0 md:font-extrabold md:opacity-0 md:transition-all md:duration-500 md:ease-in-out md:group-hover:w-auto md:group-hover:opacity-100">
                FAQ
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
