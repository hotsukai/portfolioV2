export type RichText = {
  body: string
  type: 'p' | 'p-mb' | 'h1' | 'h2' | 'h3'
}

export type Dictionary = { [key: string]: string }

export type ArticleMetaInfo = {
  url: string
  title: string
  image: string
  site_name: string
}