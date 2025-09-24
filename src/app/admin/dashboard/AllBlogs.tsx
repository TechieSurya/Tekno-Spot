"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link"; // ✅ Next.js Link
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import {
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  PlusCircle,
  Calendar,
  User,
  Clock,
  CheckCircle,
} from "lucide-react";

import { db } from "@/lib/firebaseConfig"; // ✅ adjust path
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import type { AdminTab } from "@/types/admin";


// 🔹 Define Blog type
interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  description?: string;
  metaDescription?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  status: "draft" | "published";
  author: string;
  tags: string[];
  views?: number;
  createdAt?: string;
  updatedAt?: string;
  excerpt?: string;
}

interface AllBlogsProps {
  setActive: (view: AdminTab) => void;
  setSelectedBlogId: (id: string | null) => void;
}


export default function AllBlogs({ setActive, setSelectedBlogId }: AllBlogsProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "draft" | "published">("all");
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Load blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsList: Blog[] = querySnapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Blog, "id">),
        }));
        setBlogs(blogsList);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to fetch blogs",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔹 Filter + Search
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(lowerQuery) ||
          blog.content.toLowerCase().includes(lowerQuery) ||
          (blog.tags || []).some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((blog) => blog.status === statusFilter);
    }

    return filtered.sort(
      (a, b) =>
        new Date(b.updatedAt || "").getTime() -
        new Date(a.updatedAt || "").getTime()
    );
  }, [blogs, searchQuery, statusFilter]);

  // 🔹 Delete Blog from Firestore
  const handleDelete = async (blogId: string, blogTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${blogTitle}"?`)) {
      try {
        await deleteDoc(doc(db, "blogs", blogId));
        setBlogs((prev) => prev.filter((blog) => blog.id !== blogId));

        toast({
          title: "Success",
          description: "Blog post deleted successfully",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        });
      }
    }
  };

  // 🔹 Status helpers
  const getStatusIcon = (status: Blog["status"]) =>
    status === "published" ? CheckCircle : Clock;

  const getStatusColor = (status: Blog["status"]) =>
    status === "published"
      ? "bg-accent text-accent-foreground"
      : "bg-warning/10 text-warning border-warning/20";

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 bg-white">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">All Blog Posts</h1>
          <p className="text-muted-foreground mt-1">
            Manage and organize your blog content
          </p>
        </div>
        <Button
          className="btn-primary"
          onClick={() => {
            setSelectedBlogId(null);
            setActive("Add Blog");
          }}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          New Blog Post
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="p-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search blogs by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | "draft" | "published")
              }
              className="px-3 py-2 border rounded-md bg-background text-foreground"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Blog List */}
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {filteredBlogs.length} of {blogs.length} blog posts
      </div>

      {filteredBlogs.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold">
              {searchQuery || statusFilter !== "all"
                ? "No blogs found"
                : "No blog posts yet"}
            </h3>
            <p className="text-muted-foreground">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your search or filters."
                : "Get started by creating your first blog post."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const StatusIcon = getStatusIcon(blog.status);
            return (
              <Card
                key={blog.id}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="p-0">
                  {blog.thumbnail && (
                    <div className="relative">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={getStatusColor(blog.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {blog.status}
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1 my-3">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.updatedAt || "").toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedBlogId(blog.id);
                          setActive("Add Blog");
                        }}
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      {blog.status === "published" && (
                        <Link href={`/blog/${blog.slug}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </Link>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(blog.id, blog.title)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
