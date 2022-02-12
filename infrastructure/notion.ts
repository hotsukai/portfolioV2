import { Client, LogLevel } from "@notionhq/client"
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints"
import { RichText } from "app"

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG //fixme
})

export const PRODUCT_DB_ID = 'b8351c12c16e4417bc252a32c98c9967'
export const ABOUTME_PAGE_ID = '9d856afa12644e4cb4671748bf620aa2'
export const LINK_DB_ID = '0d28a03de26c4692984f25974f683470'


export default notionClient

/**
 * ListBlockChildrenResponseをRichTextにパースする
 */
export const parseNotionBlockChildrenResponseToRichText = (response: ListBlockChildrenResponse): RichText[] => {
  const unsafeRichTexts: Array<RichText | undefined> = response.results.map((result, index) => {
    if (!('type' in result)) return
    const resultType = result.type

    if (resultType === 'paragraph' && result.paragraph.text.length > 0) {
      const body = result.paragraph.text.reduce((prev, curr) => prev + curr.plain_text, '')
      const nextIdx = index + 1
      const nextResult = response.results.length > nextIdx && response.results[nextIdx]
      const isNextLineEmpty = (nextResult && 'type' in nextResult && nextResult.type === 'paragraph' && nextResult.paragraph.text.length === 0)
      return {
        type: isNextLineEmpty ? 'p-mb' : 'p',
        body
      }
    }
    if (resultType === 'paragraph' && result.paragraph.text.length === 0) return
    if (resultType === 'heading_1') {
      const body = result.heading_1.text.reduce((prev, curr) => prev + curr.plain_text, '')
      return {
        type: 'h1',
        body
      }
    }
    if (resultType === 'heading_2') {
      const body = result.heading_2.text.reduce((prev, curr) => prev + curr.plain_text, '')
      return {
        type: 'h2',
        body
      }
    }
    if (resultType === 'heading_3') {
      const body = result.heading_3.text.reduce((prev, curr) => prev + curr.plain_text, '')
      return {
        type: 'h3',
        body
      }
    }
    return
  })

  // filterでUndefinedを除けていることをTSコンパイラに伝えるために必要
  return unsafeRichTexts.filter((urt): urt is Exclude<typeof urt, undefined> => urt?.body !== undefined)
}