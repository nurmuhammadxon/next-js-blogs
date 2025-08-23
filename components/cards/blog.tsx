import { IBlog } from "@/types";
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { cn, getReadingTime } from "@/lib/utils";
import { format } from "date-fns";

interface Props extends IBlog {
  isVertical?: boolean;
}

function BlogCard(blog: Props) {
  return (
    <div
      className={cn(
        "grid gap-4 group ",
        blog.isVertical ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}
    >
      <Link href={`/blogs/${blog.slug}`}>
        <div className="relative bg-secondary rounded-md">
          <Image
            src={blog.image.url}
            alt={blog.title}
            width={650}
            height={335}
            className="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
          />
        </div>
      </Link>
      <div className="flex flex-col space-y-4">
        <Link href={`/blogs/${blog.slug}`} className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-5" />
              <p>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
            </div>
            <Minus />
            <div className="flex items-center gap-2">
              <Clock className="size-5" />
              <p>{getReadingTime(blog.content.html)} min read</p>
            </div>
          </div>

          <h2 className="text-3xl max-md:text-2xl font-crete-round group-hover:text-blue-500 transition-colors">
            {blog.title}
          </h2>
        </Link>
        <p className="text-muted-foreground line-clamp-3">{blog.description}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.image.url}
              alt="author"
              width={30}
              height={30}
              className="object-cover rounded-sm"
            />
            <p>by {blog.author.name}</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <Link href={`/tags/${blog.tag.slug}`}>
              <Badge variant="secondary" role="button">
                <Tag className="size-3 me-2" />
                {blog.tag.name}
              </Badge>
            </Link>
            <Link href={`/categories/${blog.category.slug}`}>
              <Badge variant="outline" role="button">
                <Layers2 className="size-3 me-2" />
                {blog.category.name}
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
