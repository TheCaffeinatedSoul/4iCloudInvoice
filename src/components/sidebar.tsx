"use client";
import { useState } from "react";
import { Menu } from "./menu";
import { SidebarToggle } from "./sidebar-toggle";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={`hidden md:flex flex-col bg-[#E2DAD6] bg-hero-topography-blue-dark transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-80"
      }`}
    >
      <div
        className={`flex p-4 pb-0 items-center ${
          collapsed ? "justify-center" : "justify-end"
        }`}
      >
        <SidebarToggle
          isOpen={collapsed}
          setIsOpen={() => setCollapsed(!collapsed)}
        />
      </div>
      <Menu isOpen={!collapsed} />
    </div>
  );
};

export default Sidebar;
