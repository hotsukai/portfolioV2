import { RichText } from "app";
import { ABOUTME_PAGE_ID, fetchSinglePage, parseNotionBlockChildrenResponseToRichText } from "infrastructure/notion";



const fetchAboutMe = async (): Promise<RichText[]> => {
  const response = await fetchSinglePage(ABOUTME_PAGE_ID)
  return parseNotionBlockChildrenResponseToRichText(response)

}
export default fetchAboutMe