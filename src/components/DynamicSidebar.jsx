import { AiFillHome } from "react-icons/ai";
import { FaGamepad, FaMicrochip } from "react-icons/fa";
import { RiFootballLine, RiNewspaperLine } from "react-icons/ri";
import { MdMovie, MdChildCare } from "react-icons/md";
import { FiMusic } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function DynamicSidebar({ sideMenu, category, setCategory }) {
  const sidebarWidth = sideMenu
    ? "w-16 min-w-0 small-sidebar"
    : "w-[15%] min-w-[11rem]";

  // UI For SideBar buttons
  const btn = (id) =>
    [
      "flex items-center gap-4 px-4 py-3 rounded-xl sidebar-row transition-all duration-200",
      "hover:bg-gradient-to-r hover:from-red-20 hover:to-red-50 dark:hover:from-red-200/20 dark:hover:to-red-500/20",
      "hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
      "focus-visible:ring-2 focus-visible:ring-red-200 dark:focus-visible:ring-red-300",
      "focus-visible:ring-offset-2 focus-visible:outline-none",
      "text-sm sm:text-base font-inter leading-relaxed",
      category === id
        ? "bg-gradient-to-r from-red-300 to-red-400 text-white shadow-lg font-semibold transform scale-[1.02]"
        : "text-neutral-700 dark:text-neutral-200",
    ].join(" ");

  return (
    <aside
      className={`
        DynamicSidebar fixed top-0 left-0 z-40
        h-screen pt-16 ${sidebarWidth}
        bg-white/95 text-neutral-800 border-r border-neutral-200/50
        dark:bg-neutral-900/95 dark:text-neutral-100 dark:border-neutral-700/50
        backdrop-blur-sm shadow-xl
        overflow-y-auto overflow-x-hidden transition-[width] duration-300 ease-in-out
        scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600
      `}
    >
      <nav className="h-[90%] flex flex-col flex-1 justify-evenly items-start px-4 py-6">
        {/* Home Button */}
        <button onClick={() => setCategory(1)} className={btn(1)}>
          <AiFillHome className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-current" />
          <span className="sidebar-name truncate font-medium">Home</span>
        </button>

        {/* Subscribers Button */}
        <NavLink to="#" className="w-full">
          <button className="flex items-center gap-4 px-4 py-3 rounded-xl sidebar-row transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none text-sm sm:text-base font-inter leading-relaxed text-neutral-700 dark:text-neutral-200 w-full">
            <HiUserGroup className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-blue-600 dark:text-blue-400" />
            <span className="sidebar-name truncate font-medium">
              Subscribed
            </span>
          </button>
        </NavLink>

        {/* <hr> */}
        <div className="w-full my-4 relative">
          <hr className="w-full border-neutral-300 dark:border-neutral-600" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent h-px"></div>
        </div>

        {/* Category heading */}
        <span className="sidebar-heading uppercase font-bold text-xs sm:text-sm tracking-widest px-4 mb-2 sidebar-name text-neutral-500 dark:text-neutral-400 font-inter">
          Categories
        </span>

        {/* Video Category list */}
        <button onClick={() => setCategory(20)} className={btn(20)}>
          <FaGamepad className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-purple-600 dark:text-purple-400" />
          <span className="sidebar-name truncate font-medium">Games</span>
        </button>

        <button onClick={() => setCategory(17)} className={btn(17)}>
          <RiFootballLine className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-green-600 dark:text-green-400" />
          <span className="sidebar-name truncate font-medium">Sports</span>
        </button>

        <button onClick={() => setCategory(24)} className={btn(24)}>
          <MdMovie className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-yellow-600 dark:text-yellow-400" />
          <span className="sidebar-name truncate font-medium">
            Entertainment
          </span>
        </button>

        <button onClick={() => setCategory(10)} className={btn(10)}>
          <FiMusic className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-pink-600 dark:text-pink-400" />
          <span className="sidebar-name truncate font-medium">Music</span>
        </button>

        <button onClick={() => setCategory(25)} className={btn(25)}>
          <RiNewspaperLine className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-blue-600 dark:text-blue-400" />
          <span className="sidebar-name truncate font-medium">News</span>
        </button>

        <button onClick={() => setCategory(28)} className={btn(28)}>
          <FaMicrochip className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-cyan-600 dark:text-cyan-400" />
          <span className="sidebar-name truncate font-medium">Tech</span>
        </button>

        <button onClick={() => setCategory(34)} className={btn(31)}>
          <MdChildCare className="shrink-0 w-6 h-6 lg:w-7 lg:h-7 text-orange-600 dark:text-orange-400" />
          <span className="sidebar-name truncate font-medium">Kids</span>
        </button>
      </nav>
    </aside>
  );
}
