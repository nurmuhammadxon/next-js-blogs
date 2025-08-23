import BlogCard from "@/components/cards/blog";
import { getBlogsByTag } from "@/service/tag.service";
import { Dot, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    blog = await getBlogsByTag(slug);

  return {
    title: blog.name,
  };
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params,
    tag = await getBlogsByTag(slug);

  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5 overflow-hidden">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-crete-round">
          <span>{tag.name}</span>
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
          <p className="text-muted-foreground">Tag</p>
        </div>
      </div>

      <div className="flex flex-col space-y-24 mt-24">
        {tag.blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default Page;
