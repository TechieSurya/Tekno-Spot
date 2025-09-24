"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Eye,
  PlusCircle,
  Clock,
  CheckCircle,
  Calendar,
} from "lucide-react";

import { db } from "@/lib/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import type { AdminTab } from "@/types/admin";


// 🔹 Blog type
interface Blog {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  author: string;
  excerpt?: string;
  updatedAt: string;
  tags?: string[];
}

// 🔹 Props type
interface DashboardProps {
  setActive: (view: AdminTab) => void;
  setSelectedBlogId: (id: string | null) => void;
}


export default function Dashboard({ setActive, setSelectedBlogId }: DashboardProps) {
  const [stats, setStats] = useState<{
    totalBlogs: number;
    publishedBlogs: number;
    draftBlogs: number;
  } | null>(null);

  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Fetch blogs from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogs: Blog[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as DocumentData;
          return {
            id: doc.id,
            title: data.title,
            slug: data.slug,
            status: data.status,
            author: data.author || "Admin",
            excerpt: data.excerpt || "",
            updatedAt: data.updatedAt || new Date().toISOString(),
            tags: data.tags || [],
          };
        });

        // Stats
        const totalBlogs = blogs.length;
        const publishedBlogs = blogs.filter((b) => b.status === "published").length;
        const draftBlogs = blogs.filter((b) => b.status === "draft").length;

        setStats({ totalBlogs, publishedBlogs, draftBlogs });

        // Recent 5
        const recent = blogs
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          )
          .slice(0, 5);

        setRecentBlogs(recent);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading Dashboard...
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      icon: FileText,
      description: "All blog posts",
      color: "text-primary",
    },
    {
      title: "Published",
      value: stats.publishedBlogs,
      icon: CheckCircle,
      description: "Live on website",
      color: "text-green-600",
    },
    {
      title: "Drafts",
      value: stats.draftBlogs,
      icon: Clock,
      description: "Work in progress",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="p-6 lg:p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's an overview of your blog.
            </p>
          </div>
          <Button
            className="bg-blue-800"
            onClick={() => {
              setSelectedBlogId(null);
              setActive("Add Blog");
            }}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            New Blog Post
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat) => (
          <Card key={stat.title} className="card-elevated animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {stat.value.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Blogs */}
      <Card className="card-elevated animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Recent Blog Posts
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActive("All Blogs")}
            >
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {recentBlogs.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Button
                className="bg-blue-600"
                onClick={() => {
                  setSelectedBlogId(null);
                  setActive("Add Blog");
                }}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Your First Blog Post
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {recentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">
                        {blog.title}
                      </h3>
                      <Badge
                        variant={
                          blog.status === "published" ? "default" : "secondary"
                        }
                        className={
                          blog.status === "published"
                            ? "bg-green-500 text-white"
                            : ""
                        }
                      >
                        {blog.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>
                        {new Date(blog.updatedAt).toLocaleDateString()}
                      </span>
                      {blog.tags && blog.tags.length > 0 && (
                        <>
                          <span>•</span>
                          <span>{blog.tags.join(", ")}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedBlogId(blog.id);
                        setActive("Add Blog");
                      }}
                    >
                      Edit
                    </Button>
                    {blog.status === "published" && (
                      <Link href={`/blog/${blog.slug}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
