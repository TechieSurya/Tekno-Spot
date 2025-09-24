"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import type { Level } from "@tiptap/extension-heading";

import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig"; // ✅ Adjust to your firebaseConfig path

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
      }),
      Underline,
      Link.configure({ openOnClick: true }),
      Image,
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: placeholder || "Start writing here...",
      }),
    ],
    content: value || "",
    immediatelyRender: false, // ✅ Fix SSR hydration mismatch
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px] p-4 border rounded-b-lg bg-white",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!isMounted || !editor) {
    return <div className="p-3 border rounded-lg">Loading editor…</div>;
  }

  // ✅ Insert link to selected text
  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
    }
  };

  // ✅ Upload image to Firebase and insert into editor
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const storageRef = ref(storage, `editor-images/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file, { contentType: file.type });
    const url = await getDownloadURL(storageRef);

    editor.chain().focus().setImage({ src: url }).run();
  };

  // ✅ Apply color to selected text
  const applyColor = () => {
    if (color) {
      editor.chain().focus().setColor(color).run();
    }
  };

  return (
    <div className="border rounded-lg shadow-md bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b bg-gray-50">
        {/* Headings */}
        <select
          onChange={(e) => {
            const raw = Number(e.target.value);
            if (raw === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              const level = raw as Level;
              editor.chain().focus().toggleHeading({ level }).run();
            }
          }}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value={0}>Paragraph</option>
          <option value={1}>H1</option>
          <option value={2}>H2</option>
          <option value={3}>H3</option>
          <option value={4}>H4</option>
        </select>

        {/* Formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded font-bold ${
            editor.isActive("bold") ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded italic ${
            editor.isActive("italic") ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded underline ${
            editor.isActive("underline") ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          U
        </button>

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bulletList") ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("orderedList") ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          }`}
        >
          1. List
        </button>

        {/* Link */}
        <div className="flex gap-1 items-center">
          <input
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="Insert link"
            className="border rounded px-2 py-1 text-sm w-32"
          />
          <button
            type="button"
            onClick={addLink}
            className="px-2 py-1 rounded bg-blue-500 text-white text-sm"
          >
            Add Link
          </button>
        </div>

        {/* Upload Image */}
        <label className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer text-sm">
          Upload Image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Color Picker */}
        <div className="flex gap-1 items-center">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded border"
          />
          <button
            type="button"
            onClick={applyColor}
            className="px-2 py-1 rounded bg-purple-500 text-white text-sm"
          >
            Color
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
