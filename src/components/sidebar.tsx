"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { Card } from "./ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "./menu";

const Sidebar = () => {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={`flex flex-col bg-[#FFD8D8] bg-hero-topography-blue-dark transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex p-4 items-center ${
          collapsed ? "justify-center" : "justify-end"
        }`}
      >
        {collapsed ? (
          <RxHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer transition-all duration-300 ease-in-out"
          />
        ) : (
          <IoMdClose
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer transition-all duration-300 ease-in-out"
          />
        )}
      </div>
      <Menu isOpen={!collapsed} />
    </div>
  );
};

export default Sidebar;
