import { endpoint, gql, request } from '.'

export default async function getComments(slug: string) {
  const query = gql`
    query GetComments($slug: String!) {
      comments(
        where: {
          post: {
            slug: $slug
          }
        }
      ) {
        name
        createdAt
        comment
      }
    }
  `
  const results = await request(endpoint, query, { slug })

  return results.comments
}