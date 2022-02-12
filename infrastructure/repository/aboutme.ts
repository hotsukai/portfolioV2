import notionClient, { ABOUTME_PAGE_ID, parseNotionBlockChildrenResponseToRichText } from "infrastructure/notion";

import { RichText } from "app";


const fetchAboutMe = async (): Promise<RichText[]> => {
  const response = await notionClient.blocks.children.list({ block_id: ABOUTME_PAGE_ID })
  return parseNotionBlockChildrenResponseToRichText(response)

}
export default fetchAboutMe