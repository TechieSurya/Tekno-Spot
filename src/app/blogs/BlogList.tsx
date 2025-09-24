"use client";

import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

import { db } from "@/lib/firebaseConfig";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

// Align Blog interface with AddBlog
interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  metaDescription: string;
  thumbnail: string;
  thumbnailAlt: string;
  status: "draft" | "published";
  author: string;
  tags: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
  excerpt: string;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(5) // latest 5
        );

        const querySnapshot = await getDocs(q);
        const blogData: Blog[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];

        setBlogs(blogData);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-500">
        Loading latest blogs...
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-500">
        No blogs available yet.
      </div>
    );
  }

  // Derived values
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const estimateReadTime = (content: string) =>
    `${Math.ceil(
      content.replace(/<[^>]+>/g, "").split(/\s+/).length / 200
    )} mins Read`;

  // Featured / Secondary / Grid split
  const featured = blogs[0] ? [blogs[0]] : [];
  const secondary = blogs.slice(1, 3);
  const gridBlogs = blogs.slice(3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-8">
        Latest <span className="text-blue-600">Blog Posts</span>
      </h2>

      {/* Featured + Secondary */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {featured.map((blog) => (
          <div
            key={blog.id}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            {blog.thumbnail ? (
              <img
                src={blog.thumbnail}
                alt={blog.thumbnailAlt || blog.title}
                className="w-full h-[300px] object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/600x400?text=No+Image";
                }}
              />
            ) : (
              <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end text-white">
              <span className="bg-blue-600 text-xs px-2 py-2 rounded-full mb-2 inline-block w-36 text-center font-bold truncate">
                {blog.tags[0] || "General"}
              </span>
              <h3 className="text-2xl font-semibold">{blog.title}</h3>
              <div className="flex items-center gap-4 text-sm mt-2 opacity-90">
                <span>{formatDate(blog.createdAt)}</span>
                <span className="flex items-center gap-1">
                  <FiClock /> {estimateReadTime(blog.content)}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="grid gap-6">
          {secondary.map((blog) => (
            <div
              key={blog.id}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={blog.thumbnail}
                alt={blog.thumbnailAlt || blog.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
                <span className="bg-blue-600 text-xs font-bold px-2 py-2 rounded-full mb-2 inline-block w-36 text-center truncate">
                  {blog.tags[0] || "General"}
                </span>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <div className="flex items-center gap-3 text-xs mt-1 opacity-90">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span className="flex items-center gap-1">
                    <FiClock /> {estimateReadTime(blog.content)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {gridBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={blog.thumbnail}
              alt={blog.thumbnailAlt || blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mb-3 inline-block">
                {blog.tags[0] || "General"}
              </span>
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {blog.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                <span>{formatDate(blog.createdAt)}</span>
                <span className="flex items-center gap-1">
                  <FiClock /> {estimateReadTime(blog.content)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
