import { IArchiveBlogs, IBlog } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				slug
				description
				image {
					url
				}
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				author {
					name
					image {
						url
					}
				}
				content {
					html
				}
				createdAt
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getDetailedBlog = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					id
					name
					image {
						url
					}
					description
				}
				content {
					html
				}
				createdAt
				tag {
					name
					slug
				}
				image {
					url
				}
				title
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
	return blog
})

export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(
				where: {
					OR: [
						{ title_contains: $title }
						{ category: { name_contains: $title } }
						{ tag: { name_contains: $title } }
					]
				}
			) {
				id
				title
				slug
				createdAt
				publishedAt
				updatedAt
				description
				image {
					url
				}
				author {
					id
					name
					description
					image {
						url
					}
				}
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
		title,
	})

	return blogs
}

export const getArchiveBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				slug
				createdAt
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)

	const filterBlogs = blogs.reduce(
		(acc: { [year: string]: IArchiveBlogs }, blog: IBlog) => {
			const year = blog.createdAt.substring(0, 4)
			if (!acc[year]) {
				acc[year] = { year, blogs: [] }
			}
			acc[year].blogs.push(blog)
			return acc
		},
		{}
	)
	const results: IArchiveBlogs[] = Object.values(filterBlogs)
	return results
}
