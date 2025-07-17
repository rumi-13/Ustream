// src/pages/Home.jsx
import React, { useState } from "react";
import DynamicSidebar from "../components/DynamicSidebar";
import Feed from "../components/Feed";

export default function Home({ sideMenu }) {
  const [category, setCategory] = useState(0);

  // Home contains SideBar on Left and Feed
  return (
    <>
      <DynamicSidebar
        sideMenu={sideMenu}
        category={category}
        setCategory={setCategory}
      />
      <Feed sideMenu={sideMenu} category={category} setCategory={setCategory} />
    </>
  );
}
