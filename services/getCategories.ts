import { endpoint, gql, request } from '.'

export default async function getCategories() {
  console.log(endpoint)
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