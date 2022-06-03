import { endpoint, gql, request } from '.'

export default async function getCategories() {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const results = await request(endpoint, query)

  return results.categories
}