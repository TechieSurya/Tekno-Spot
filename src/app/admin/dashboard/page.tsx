"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
import AdminLayout from "./AdminLayout"; // ✅ wrap content here
import type { AdminTab } from "@/types/admin";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("Dashboard");
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  return (
    <AdminLayout setActive={setActiveTab}>
      {activeTab === "Dashboard" && (
        <Dashboard setActive={setActiveTab} setSelectedBlogId={setSelectedBlogId} />
      )}
      {activeTab === "Add Blog" && (
        <AddBlog setActive={setActiveTab} blogId={selectedBlogId ?? undefined} />
      )}
      {activeTab === "All Blogs" && (
        <AllBlogs setActive={setActiveTab} setSelectedBlogId={setSelectedBlogId} />
      )}
    </AdminLayout>
  );
}
