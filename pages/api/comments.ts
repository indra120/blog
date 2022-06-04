import { GraphQLClient, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN

export default async function comments(req: NextApiRequest, res: NextApiResponse) {
  const gqlClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const query = gql`
    mutation CreateComment(
      $comment: String!,
      $email: String!,
      $name: String!,
      $slug: String!
    ) {
      createComment(
        data: {
          comment: $comment,
          email: $email,
          name: $name,
          post: {
            connect: {
              slug: $slug
            }
          }
        }
      ) { id }
    }
  `

  try {
    const result = await gqlClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}