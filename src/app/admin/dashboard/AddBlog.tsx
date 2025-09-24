"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RichTextEditor } from "@/components/blog/RichTextEditor";
import { toast } from "@/components/ui/use-toast";
import { Save, Send, ArrowLeft, X } from "lucide-react";
import type { AdminTab } from "@/types/admin";

import { db, storage } from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface AddBlogProps {
  setActive: (view: AdminTab) => void;
  blogId?: string;
}

interface Blog {
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
  views?: number;
  createdAt?: string;
  updatedAt?: string;
  excerpt?: string;
}

export default function AddBlog({ setActive, blogId }: AddBlogProps) {
  const router = useRouter();
  const isEditing = Boolean(blogId);

  const initialFormData: Blog = {
    title: "",
    slug: "",
    content: "",
    description: "",
    metaDescription: "",
    thumbnail: "",
    thumbnailAlt: "",
    status: "draft",
    author: "Admin",
    tags: [],
  };

  const [formData, setFormData] = useState<Blog>(initialFormData);
  const [newTag, setNewTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch blog if editing
  useEffect(() => {
    const fetchBlog = async () => {
      if (isEditing && blogId) {
        try {
          const blogRef = doc(db, "blogs", blogId);
          const blogSnap = await getDoc(blogRef);
          if (blogSnap.exists()) {
            setFormData(blogSnap.data() as Blog);
          }
        } catch (err) {
          console.error("Failed to fetch blog:", err);
        }
      } else {
        setFormData(initialFormData);
        setNewTag("");
      }
    };

    fetchBlog();
  }, [isEditing, blogId]);

  // ✅ Auto-generate slug
  useEffect(() => {
    if (formData.title && !isEditing) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title, isEditing]);

  const handleInputChange = (field: keyof Blog, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(newTag.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag.trim()],
        }));
      }
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  // ✅ FIXED: Image upload with error handling + logging
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("Uploading file:", file.name);

    const storageRef = ref(storage, `thumbnails/${Date.now()}-${file.name}`);

    // Upload with contentType
    await uploadBytes(storageRef, file, { contentType: file.type });

    const url = await getDownloadURL(storageRef);
    console.log("Uploaded image URL:", url);

    setFormData((prev) => ({ ...prev, thumbnail: url }));

    toast({
      title: "Success",
      description: "Image uploaded successfully!",
    });
  } catch (error: any) {
    console.error("Upload failed:", error);
    toast({
      title: "Error",
      description: error.message || "Image upload failed. Check Firebase rules & config.",
      variant: "destructive",
    });
  }
};


  // ✅ Save / Update blog
  const handleSave = async (status: "draft" | "published") => {
    if (!formData.title.trim()) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    if (!formData.content.trim()) {
      toast({
        title: "Error",
        description: "Content is required",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const blogData: Blog = {
        ...formData,
        status,
        views: formData.views || 0,
        createdAt: formData.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        excerpt:
          formData.excerpt?.trim() ||
          formData.content.replace(/<[^>]*>/g, "").substring(0, 160) + "...",
      };

      if (isEditing && blogId) {
        const blogRef = doc(db, "blogs", blogId);
        await updateDoc(blogRef, blogData as DocumentData);
      } else {
        await addDoc(collection(db, "blogs"), blogData as DocumentData);
      }

      toast({
        title: "Success",
        description:
          status === "published" ? "Blog published!" : "Blog saved as draft",
      });

      setActive("All Blogs");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to save blog",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 lg:p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            onClick={() => setActive("All Blogs")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {isEditing
                ? "Update your blog post"
                : "Write and publish your blog post"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="bg-green-500"
              onClick={() => handleSave("draft")}
              disabled={isLoading}
            >
              <Save className="h-4 w-4 mr-2" /> Save Draft
            </Button>
            <Button
              onClick={() => handleSave("published")}
              disabled={isLoading}
              className="bg-blue-800"
            >
              <Send className="h-4 w-4 mr-2" /> Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter blog post title"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="url-friendly-slug"
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  URL: /blog/{formData.slug || "your-slug-here"}
                </p>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Brief description of your blog post"
                  className="mt-2"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Content *</CardTitle>
            </CardHeader>
            <CardContent>
              <RichTextEditor
                value={formData.content}
                onChange={(value) => handleInputChange("content", value)}
                placeholder="Start writing your blog post content..."
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SEO Settings */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) =>
                    handleInputChange("metaDescription", e.target.value)
                  }
                  placeholder="SEO meta description (160 characters max)"
                  className="mt-2"
                  rows={3}
                  maxLength={160}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="thumbnail-upload">Upload Image</Label>
                <Input
                  id="thumbnail-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-2"
                />
              </div>
              <div className="text-center text-muted-foreground">or</div>
              <div>
                <Label htmlFor="thumbnail-url">Image URL</Label>
                <Input
                  id="thumbnail-url"
                  value={formData.thumbnail}
                  onChange={(e) =>
                    handleInputChange("thumbnail", e.target.value)
                  }
                  placeholder="https://example.com/image.jpg"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="thumbnail-alt">Alt Text</Label>
                <Input
                  id="thumbnail-alt"
                  value={formData.thumbnailAlt}
                  onChange={(e) =>
                    handleInputChange("thumbnailAlt", e.target.value)
                  }
                  placeholder="Describe the image for accessibility"
                  className="mt-2"
                />
              </div>
              {formData.thumbnail && (
                <div className="mt-4">
                  <img
                    src={formData.thumbnail || undefined}
                    alt={formData.thumbnailAlt || "Featured image preview"}
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="tags">Add Tags</Label>
                <Input
                  id="tags"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder="Type and press Enter"
                  className="mt-2"
                />
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {formData.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
