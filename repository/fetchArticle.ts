import { JSDOM } from 'jsdom';
import ky from 'ky';

import { Dictionary } from 'app';
import { ARTICLE_DB_ID, fetchAllFromDB, parseNotionQueryDBResponseToArrOfDict } from 'infrastructure/notion';

const jsdom = new JSDOM();
const Parser = new jsdom.window.DOMParser();

const fetchArticleOGPInfo = async (url: string): Promise<Dictionary> => {
  const res = await ky.get(url)
  const el = Parser.parseFromString(await res.text(), 'text/html')
  const headEls = el.head.children

  const ogpInfos: Dictionary = {}
  Array.from(headEls).forEach(v => {
    const prop = v.getAttribute('property')
    if (!prop) return undefined;
    const key = prop.replace("og:", "")
    const value = v.getAttribute("content")
    if (typeof value === 'string') {
      ogpInfos[key] = value
    }
  })
  return ogpInfos
}

type ArticleMetaInfo = {
  url: string
  title: string
  image: string
  type: string
  site_name: string
}
export const fetchAllArticle = async () => {
  const res = await fetchAllFromDB(ARTICLE_DB_ID)
  const tasks = parseNotionQueryDBResponseToArrOfDict(res)
    .filter((row) => row.url && row.url.length !== 0)
    .map(row => fetchArticleOGPInfo(row.url as string))
  return await Promise.all(tasks) as ArticleMetaInfo[]

}

export default fetchArticleOGPInfo