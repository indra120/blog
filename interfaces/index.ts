export type categories = {
  name: string
  slug: string
}[]

export type posts = {
  node: {
    author: {
      bio: string
      name: string
      id: string
      photo: {
        url: string
      }
    }
    createdAt: string
    slug: string
    title: string
    exerpt: string
    featuredImage: {
      url: string
    }
    categories: categories
  }
}[]

export type recommendationWidget = {
  categories: string[]
  slug: string
}

export type relatedPosts = {
  title: string
  featuredImage: {
    url: string
  }
  createdAt: string
  slug: string
}[]