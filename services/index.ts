import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export {
  endpoint, gql, request
}

export { default as getCategories } from './getCategories'
export { default as getPosts } from './getPosts'
export { default as getRecentPosts } from './getRecentPosts'
export { default as getSimilarPosts } from './getSimilarPosts'
export { default as getPostDetails } from './getPostDetails'