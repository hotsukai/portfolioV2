import { RichLine } from "app";
import { ABOUTME_PAGE_ID, getNotionPage } from "infrastructure/notion";

const fetchAboutMe = async (): Promise<RichLine[]> => {
  return (await getNotionPage(ABOUTME_PAGE_ID)).content;
};
export default fetchAboutMe;
