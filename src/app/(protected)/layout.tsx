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
      <div className="flex bg-[#FFF7F7] min-h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default ProtectedLayout;
