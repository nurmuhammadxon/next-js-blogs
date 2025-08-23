import { IAuthor } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        name
        id
        description
        image {
          url
        }
        blogs {
          id
        }
      }
    }
  `;

  const { authors } = await request<{ authors: IAuthor[] }>(graphqlAPI, query);
  return authors;
};

export const getDetailedAuthor = async (id: string) => {
  const query = gql`
    query MyQuery($id: ID) {
      author(where: { id: $id }) {
        description
        name
        image {
          url
        }
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
          category {
            name
            slug
          }
          tag {
            name
            slug
          }
          image {
            url
          }
          title
          slug
        }
      }
    }
  `;

  const { author } = await request<{ author: IAuthor }>(graphqlAPI, query, {
    id,
  });
  return author;
};
