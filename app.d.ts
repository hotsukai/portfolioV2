export type RichLine = {
  body: RichText[]
  type: 'p' | 'h1' | 'h2' | 'h3' | 'li'
} | {
  type: 'emptyLine' | 'divider'
}
export type RichText = {
  type: 'normal'
  body: string
} | {
  type: 'a'
  body: string
  href: string
}

export type Dictionary = { [key: string]: string | string[] }

export type ArticleMetaInfo = {
  url: string
  title: string
  image: string
  site_name: string
}

export type Product = {
  title: string
  coverImage: string | null
  season: string
  content: RichLine[]
  technologyStack: string[]
  link: string | null
  GitHub: string | null
  description: string
}

export type ContentType = 'image/jpeg' | 'image/png' // FIXME