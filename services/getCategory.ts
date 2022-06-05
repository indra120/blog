import { endpoint, gql, request } from '.'

export default async function getCategory(slug: string) {
  const query = gql`
    query GetCategory($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
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
          }
        }
      }
    }
  `
  const result = await request(endpoint, query, { slug })

  return result.postsConnection.edges
}