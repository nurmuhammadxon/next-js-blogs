import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { ArrowUpRight, Calendar, Clock, Minus } from "lucide-react";
import Link from "next/link";
import { getDetailedBlog } from "@/service/blog.service";
import { format } from "date-fns";
import { getReadingTime } from "@/lib/utils";
import ShareBtn from "../../_components/share-btn";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params,
    blog = await getDetailedBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      image: blog.image.url,
    },
  };
}

async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = await params,
    blog = await getDetailedBlog(slug);

  return (
    <section className="pt-[15vh] max-w-5xl mx-auto max-md:px-2.5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-crete-round">
        {blog.title}
      </h1>

      <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
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
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="size-5" />
          <p>{getReadingTime(blog.content.html)} min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Calendar className="size-5" />
          <p>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
        </div>
      </div>

      <Image
        src={blog.image.url}
        alt="alt"
        width={1120}
        height={595}
        className="mt-4 rounded-md object-cover"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground ">Share</p>
            <ShareBtn />
          </div>
        </div>
        <div className="flex-1 prose dark:prose-invert">
          {parse(blog.content.html)}
        </div>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={blog.author.image.url}
          alt="author"
          width={155}
          height={155}
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-3xl font-crete-round">{blog.author.name}</h2>
          <p className="line-clamp-2 text-muted-foreground">
            {blog.author.description}
          </p>
          <Link
            href={`/author/${blog.author.id}`}
            className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
          >
            <span>See all posts by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SlugPage;
