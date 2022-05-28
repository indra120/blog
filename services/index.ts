import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export {
  endpoint, gql, request
}

export { default as getCategories } from './getCategories'