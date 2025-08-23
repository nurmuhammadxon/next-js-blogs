import AuthorCard from "@/components/cards/author";
import { getAuthors } from "@/service/author.service";
import { Dot, Home } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

async function AboutPage() {
  const authors = await getAuthors();

  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-crete-round">
          <span>About</span>
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
          <p className="text-muted-foreground">About</p>
        </div>
      </div>

      <h1 className="text-4xl text-center font-crete-round">
        We are the Muhuddinov, <br /> Team of content writers and designers
      </h1>

      <div className="grid grid-cols-4 gap-4 min-h-96 mt-6">
        <div className="col-span-2 max-md:col-span-4 relative h-80">
          <Image
            src={"/about/01.jpg"}
            alt="about"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-80 self-end max-md:col-span-2 relative max-md:h-72">
          <Image
            src={"/about/00.jpg"}
            alt="about"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="max-md:col-span-2 relative h-80 max-md:mb-8 max-md:h-72">
          <Image
            src={"/about/02.jpg"}
            alt="about"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground">
        <p>
          If ever a place existed where you could just go crazy creatively, it
          is definitely your about page. It’s your chance to show your readers
          who you really are. Pictures, quotes, inspirational graphics, whatever
          it is that drives you.. Display it here in a way that only you can.
        </p>
        <p>
          I’ve included a plugin in the setup of this theme that will make
          adding columns to your pages and posts a piece of cake. Let creativity
          take control, and forget about the technical end of things, I’ve got
          your six.
        </p>
      </div>

      <h2 className="text-center text-4xl section-title font-creteRound my-12">
        <span>Our writers</span>
      </h2>

      <div className="flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center">
        {authors.map((c) => (
          <AuthorCard key={c.name} {...c} />
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
