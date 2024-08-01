"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex bg-[#F5EDED] min-h-screen overflow-x-scroll pt-16">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default ProtectedLayout;
