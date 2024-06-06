"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { Card } from "./ui/card";
import Link from "next/link";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={`flex flex-col gap-4 bg-[#FFD8D8] bg-hero-topography-blue-dark transition-all duration-300 ease-in-out ${
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
      <div className="flex flex-col items-center justify-center gap-2 w-full px-2">
        <Card className="p-2 w-full border-none shadow-none cursor-pointer">
          <Link
            href={"/home"}
            className="flex items-center justify-center gap-2"
          >
            {!collapsed && <h1 className="font-semibold">Home</h1>}
            <GoHomeFill />
          </Link>
        </Card>
        <Card className="p-2 w-full border-none shadow-none bg-transparent cursor-pointer">
          <Link
            href={"/invoice"}
            className="flex items-center justify-center gap-2"
          >
            {!collapsed && <h1 className="font-semibold">Invoice</h1>}
            <TbFileInvoice />
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
