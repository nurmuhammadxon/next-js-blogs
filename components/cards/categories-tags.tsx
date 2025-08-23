import { ITagAndCategory } from "@/types";
import { Layers2, Tag } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props extends ITagAndCategory {
  type: "categories" | "tags";
}

function CategoriesTagsCard(item: Props) {
  return (
    <Link
      className="bg-secondary hover:bg-secondary/80 transition-colors p-4 md:p-8 rounded-md shadow-xl flex items-center gap-4 justify-center dark:!shadow-white/20 !shadow-black/20"
      href={`/${item.type}/${item.slug}`}
    >
      {item.type === "categories" ? <Layers2 /> : <Tag />}
      <h1 className="text-2xl font-crete-round">{item.name}</h1>
      <p>{item.blogs.length}</p>
    </Link>
  );
}

export default CategoriesTagsCard;
