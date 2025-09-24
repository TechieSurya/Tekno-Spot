"use client";

import { ReactNode, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
  setActive: (tab: "Dashboard" | "Add Blog" | "All Blogs") => void; // ✅ accept from parent
}

export default function AdminLayout({ children, setActive }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        setActive={setActive}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden bg-gray-200 p-2 rounded-md"
          >
            {sidebarOpen ? "Close" : "Menu"}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
