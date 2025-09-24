// src/app/blogs/page.tsx (server component by default)

import BlogList from "./BlogList";


export const metadata = {
  title: "Latest Blog Posts | Tekno Spot",
  description:
    "Read the latest blogs on Web Design, Web Development, App Development, SEO, UI/UX, and Digital Marketing. Stay ahead with Tekno Spot insights for 2025.",
};

export default function BlogPage() {
  return <BlogList />;
}
