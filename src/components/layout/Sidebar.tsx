"use client";

import { Home, FileText, PlusCircle } from "lucide-react";

interface SidebarProps {
  setActive: (tab: "Dashboard" | "Add Blog" | "All Blogs") => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}



export default function Sidebar({ setActive, isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 w-64 bg-blue-800 text-white border-r border-border p-6 flex flex-col transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
        Admin Panel
        <button
          className="lg:hidden text-sm text-muted-foreground"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </h2>
      <nav className="space-y-2">
        <button onClick={() => setActive("Dashboard")} className="flex items-center gap-2 p-2 rounded hover:bg-muted w-full text-left">
          <Home className="h-4 w-4" /> Dashboard
        </button>
        <button onClick={() => setActive("Add Blog")} className="flex items-center gap-2 p-2 rounded hover:bg-muted w-full text-left">
          <PlusCircle className="h-4 w-4" /> Add Blog
        </button>
        <button onClick={() => setActive("All Blogs")} className="flex items-center gap-2 p-2 rounded hover:bg-muted w-full text-left">
          <FileText className="h-4 w-4" /> All Blogs
        </button>
        
      </nav>
    </aside>
  );
}

