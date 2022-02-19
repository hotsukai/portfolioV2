import { RichText } from "app";
import { ABOUTME_PAGE_ID, getNotionPage } from "infrastructure/notion";


const fetchAboutMe = (): Promise<RichText[]> => {
  return getNotionPage(ABOUTME_PAGE_ID)

}
export default fetchAboutMe