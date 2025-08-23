import { IBlog, ITagAndCategory } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        name
        slug
        blogs {
          id
        }
      }
    }
  `;

  const { tags } = await request<{ tags: ITagAndCategory[] }>(
    graphqlAPI,
    query
  );
  return tags;
};

export const getBlogsByTag = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
        blogs {
          author {
            name
            image {
              url
            }
            description
          }
          description
          content {
            html
          }
          createdAt
          tag {
            name
            slug
          }
          category {
            name
            slug
          }
          image {
            url
          }
          title
          slug
        }
        name
      }
    }
  `;

  const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    {
      slug,
    }
  );
  return tag;
});
