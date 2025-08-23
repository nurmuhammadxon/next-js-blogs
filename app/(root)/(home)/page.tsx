import BlogCard from "@/components/cards/blog";
import BgArrow from "@/components/shared/bg-arrow";
import { getBlogs } from "@/service/blog.service";
import React from "react";

async function HomePage() {
  const blogs = await getBlogs();

  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5 overflow-hidden">
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-crete-round text-center max-w-2xl">
          Taking control of your daily life is easy when you know how!
          <BgArrow />
        </h1>
      </div>
      <h2 className="text-center text-4xl section-title font-crete-round">
        <span>Recent posts</span>
      </h2>

      <div className="flex flex-col space-y-24 mt-24">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
