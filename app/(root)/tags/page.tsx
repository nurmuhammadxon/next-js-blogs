import CategoriesTagsCard from "@/components/cards/categories-tags";
import { getTags } from "@/service/tag.service";
import { Dot, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "All Tags",
};

async function Page() {
  const tags = await getTags();
  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5 overflow-hidden">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-crete-round">
          <span>Tags</span>
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
          <p className="text-muted-foreground">Tags</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-24 gap-2.5">
        {tags.map((i) => (
          <CategoriesTagsCard key={i.slug} {...i} type="tags" />
        ))}
      </div>
    </section>
  );
}

export default Page;
