import { endpoint, gql, request } from '.'

export default async function getRecentPosts() {
  const query = gql`
    query GetRecentPosts() {
      posts(
        orderBy: createdAt_ASC
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
  const results = await request(endpoint, query)

  return results.posts
}