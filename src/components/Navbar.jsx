import React, { useState } from "react";
import {
  MdMenu,
  MdSearch,
  MdVideoCall,
  MdMoreVert,
  MdNotificationsNone,
  MdOutlineDarkMode,
  MdPersonOutline,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function YouTubeCloneNavbar({ setSideMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  // Function for handling SideBarMenu
  const handleMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 w-screen bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50">
      <div className="text-neutral-800 dark:text-neutral-100 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/*Hamburger will be visible when only user is in HomePage*/}
          {isHomePage && (
            <button
              aria-label="Open menu"
              className="rounded-lg p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
              onClick={handleMenu}
            >
              <MdMenu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-700 dark:text-neutral-300" />
            </button>
          )}
          {/* App Name */}
          <NavLink
            to="/"
            className="font-inter font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent hover:from-red-700 hover:to-red-600 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md px-1"
          >
            Ustream
          </NavLink>
        </div>

        {/* Middle Section (Search) */}
        <form
          /* TODO: handle search submit */
          className="flex flex-1 max-w-2xl items-center"
        >
          <div className="flex w-full shadow-sm">
            <input
              type="text"
              placeholder="Search "
              className="w-full rounded-l-full border border-neutral-300 dark:border-neutral-600 bg-white/90 dark:bg-neutral-800/90 px-5 py-3 text-sm sm:text-base font-inter placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-100 transition-all duration-200 focus:outline-none focus:border-red-500 dark:focus:border-red-400 focus:ring-2 focus:ring-red-500/20 dark:focus:ring-red-400/20 focus:bg-white dark:focus:bg-neutral-800"
              /* TODO: bind input value */
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center rounded-r-full border border-l-0 border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 px-6 py-3 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-600 hover:border-red-500 dark:hover:border-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2 active:scale-95"
            >
              <MdSearch className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>
        </form>

        {/* Right Section  */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Upload  */}
          <NavLink
            to="/upload"
            aria-label="Upload video"
            className="rounded-lg p-2 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
          >
            <MdVideoCall className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-red-600 dark:text-red-400" />
          </NavLink>

          {/* More Options  */}
          <button
            aria-label="More options"
            className="rounded-lg p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
            /* TODO: open options menu */
          >
            <MdMoreVert className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-600 dark:text-neutral-300" />
          </button>

          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="relative rounded-lg p-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2"
            /* TODO: show notifications panel */
          >
            <MdNotificationsNone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-600 dark:text-neutral-300" />

            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full ring-2 ring-white dark:ring-neutral-900 opacity-0 scale-0 transition-all duration-200"></span>
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 transition-all duration-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            onClick={toggleDarkMode}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
              {darkMode ? (
                <FaSun className="w-full h-full text-amber-500 animate-pulse" />
              ) : (
                <FaMoon className="w-full h-full text-slate-600 dark:text-slate-300" />
              )}
            </div>
          </button>

          {/* User Profile Avatar */}
          <NavLink
            to=""
            className="flex items-center rounded-full p-1 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus-visible:ring-offset-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            /* TODO: open profile dropdown */
          >
            <div className="rounded-full bg-white dark:bg-neutral-800 p-2">
              <MdPersonOutline className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-600 dark:text-neutral-300" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
