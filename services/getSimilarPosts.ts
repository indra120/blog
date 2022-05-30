import { endpoint, gql, request } from '.'
import { recommendationWidget } from '../interfaces'

export default async function getSimilarPosts(categories: recommendationWidget['categories'], slug: recommendationWidget['slug']) {
  const query = gql`
    query GetSimilarPosts($categories: [String!], $slug: String!) {
      posts(
        where: {
          slug_not: $slug,
          AND: {
            categories_some: {
              slug_in: $categories
            }
          }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const results = await request(endpoint, query, { categories, slug })

  return results.posts
}