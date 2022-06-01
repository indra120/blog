import { endpoint, gql, request } from '.'

export default async function getPostDetails(slug: string) {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        exerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `
  const results = await request(endpoint, query, { slug })

  return results.post
}