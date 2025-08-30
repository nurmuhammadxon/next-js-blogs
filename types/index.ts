import React from "react";

export interface ChildProps {
  children: React.ReactNode;
}

export interface IArchiveBlogs {
  year: string;
  blogs: IBlog[];
}

export interface IBlog {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  author: IAuthor;
  tag: ITagAndCategory;
  category: ITagAndCategory;
  content: IContent;
  image?: {
    url: string;
  };
}

export interface IAuthor {
  id: string;
  name: string;
  description: string;
  image?: { url: string };
  blogs?: IBlog[];
}

export interface ITagAndCategory {
  name: string;
  slug: string;
  blogs?: IBlog[];
}

export interface IContent {
  html: string;
}
