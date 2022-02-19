export type RichLine = {
  body: string
  type: 'p' | 'p-mb' | 'h1' | 'h2' | 'h3'
} | {
  type: 'a'
  body: string
  href: string
}

export type Dictionary = { [key: string]: string }

export type ArticleMetaInfo = {
  url: string
  title: string
  image: string
  site_name: string
}

export type Product = {
  title: string
  season: string
  image: string
  url: string
  description: RichLine[]
}