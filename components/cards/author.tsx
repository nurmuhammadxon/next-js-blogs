import { IAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AuthorCard(author: IAuthor) {
  return (
    <Link
      className="felx flex-col space-y-2 w-52 text-center"
      href={`/author/${author.id}`}
    >
      <div className="w-full h-52 relative">
        <Image
          src={author.image.url}
          alt="author"
          fill
          className="object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <h2 className="text-2xl font-crete-round">{author.name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-white">{author.blogs.length}</span>
        {"  "}
        Published posts
      </p>
    </Link>
  );
}

export default AuthorCard;
