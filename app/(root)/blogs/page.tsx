import BlogCard from "@/components/cards/blog";
import { getBlogs } from "@/service/blog.service";
import { Dot, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "All Blogs",
};

async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-crete-round">
          <span>Blogs</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="size-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Blogs</p>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
