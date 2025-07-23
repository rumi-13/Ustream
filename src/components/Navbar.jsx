import React, { useState, useRef, useEffect } from "react";
import {
  MdMenu,
  MdSearch,
  MdVideoCall,
  MdMoreVert,
  MdNotificationsNone,
  MdPersonOutline,
} from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { CgArrowsShrinkH } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function YouTubeCloneNavbar({ setSideMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const popupRef = useRef(null);

  // Function for handling SideBarMenu
  const handleMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const isHomePage = location.pathname === "/";

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopupMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50">
      <div className="text-neutral-800 dark:text-neutral-100 flex max-w-7xl w-full items-center justify-between gap-1 sm:gap-4 md:gap-8 lg:gap-10 px-2 py-2 md:py-3">
        {/* Left Section */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {isHomePage && (
            <button
              aria-label="Open menu"
              className="rounded-lg p-1.5 sm:p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
              onClick={handleMenu}
            >
              <CgArrowsShrinkH className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-neutral-700 dark:text-neutral-300" />
            </button>
          )}
          <NavLink
            to="/"
            className="font-inter font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent hover:from-red-700 hover:to-red-600 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md px-1 shrink-0"
          >
            Ustream
          </NavLink>
        </div>

        {/* Middle Section (Search) */}
        <form className="flex flex-1 max-w-[120px] xs:max-w-[160px] sm:max-w-sm md:max-w-md lg:max-w-xl items-center mx-1 sm:mx-2">
          <div className="flex w-full shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-l-full border border-neutral-300 dark:border-neutral-600 bg-white/90 dark:bg-neutral-800/90 px-2 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-sm font-inter placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-100 transition-all duration-200 focus:outline-none focus:border-red-500 dark:focus:border-red-400 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-400/20 focus:bg-white dark:focus:bg-neutral-800"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center rounded-r-full border border-l-0 border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 px-2 sm:px-4 py-2 sm:py-3 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-600 hover:border-red-500 dark:hover:border-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2 active:scale-95"
            >
              <MdSearch className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Desktop Icons - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1 md:gap-2">
            <NavLink
              to="/upload"
              aria-label="Upload video"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
            >
              <MdVideoCall className="w-6 h-6 md:w-7 md:h-7 text-red-600 dark:text-red-400" />
            </NavLink>

            <button
              aria-label="Notifications"
              className="relative rounded-lg p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
            >
              <MdNotificationsNone className="w-6 h-6 md:w-7 md:h-7 text-neutral-600 dark:text-neutral-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white dark:ring-neutral-900 opacity-0 scale-0 transition-all duration-200"></span>
            </button>

            <button
              aria-label="Toggle dark mode"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              onClick={toggleDarkMode}
            >
              <div className="relative w-6 h-6 md:w-7 md:h-7">
                {darkMode ? (
                  <FaSun className="w-full h-full text-amber-500 animate-pulse" />
                ) : (
                  <FaMoon className="w-full h-full text-slate-600 dark:text-slate-300" />
                )}
              </div>
            </button>

            <NavLink
              to=""
              className="flex items-center rounded-full p-1 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              <div className="rounded-full bg-white dark:bg-neutral-800 p-2">
                <MdPersonOutline className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300" />
              </div>
            </NavLink>
          </div>

          {/* Mobile Burger Menu */}
          <div className="relative sm:hidden" ref={popupRef}>
            <button
              aria-label="Open menu"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
              onClick={() => setShowPopupMenu(!showPopupMenu)}
            >
              <CiMenuFries className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </button>

            {/* Popup Menu Card */}
            {showPopupMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                {/* Upload */}
                <NavLink
                  to="/upload"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  onClick={() => setShowPopupMenu(false)}
                >
                  <MdVideoCall className="w-5 h-5 text-red-600 dark:text-red-400" />
                  Upload Video
                </NavLink>

                {/* Notifications */}
                <button
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  onClick={() => setShowPopupMenu(false)}
                >
                  <MdNotificationsNone className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                  Notifications
                </button>

                {/* Dark Mode Toggle */}
                <button
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  onClick={() => {
                    toggleDarkMode();
                    setShowPopupMenu(false);
                  }}
                >
                  <div className="w-5 h-5">
                    {darkMode ? (
                      <FaSun className="w-full h-full text-amber-500" />
                    ) : (
                      <FaMoon className="w-full h-full text-slate-600 dark:text-slate-300" />
                    )}
                  </div>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                {/* Divider */}
                <hr className="my-2 border-neutral-200 dark:border-neutral-700" />

                {/* Profile */}
                <NavLink
                  to=""
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  onClick={() => setShowPopupMenu(false)}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-600">
                    <MdPersonOutline className="w-4 h-4 text-white" />
                  </div>
                  Your Profile
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
