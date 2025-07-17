import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ setSideMenu }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 overscroll-none">
      <Navbar setSideMenu={setSideMenu} />
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
