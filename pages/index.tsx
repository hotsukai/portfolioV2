import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { createContext, FC, useState } from "react";

import { ArticleMetaInfo, Product, RichLine } from "app";
import AboutMe from "components/index/AboutMe";
import BackGroundImage from "components/index/BackgroundImage";
import Links from "components/index/Links";
import PageNum from "components/index/PageNumber";
import Works from "components/index/Works";
import { SITE_NAME } from "const";
import fetchAboutMe from "repository/aboutme";
import { fetchAllArticle } from "repository/article";
import fetchProducts from "repository/product";

type Props = {
  aboutMe: RichLine[];
  articlesMetaInfo: ArticleMetaInfo[];
  products: Product[];
};
const Home: NextPage<Props> = ({ aboutMe, articlesMetaInfo, products }) => {
  return (
    <IndexPageContextProvider>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="overflow-y-scroll relative h-screen snap-y snap-mandatory">
        <BackGroundImage />
        <AboutMe aboutMe={aboutMe} />
        <Links />
        <Works articlesMetaInfo={articlesMetaInfo} products={products} />
        <PageNum />
      </main>
    </IndexPageContextProvider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutMe = await fetchAboutMe();
  // const articles = await fetchArticleOGPInfo(
  //   "https://zenn.dev/hotsukai/articles/enpit2021_memo"
  // );

  const articlesMetaInfo = await fetchAllArticle();
  const products: Product[] = await fetchProducts();

  return { props: { aboutMe, articlesMetaInfo, products } };
};

export default Home;

type IndexPageContextValue = {
  pageNum: string;
  setPageNum: (_: string) => void;
};
export const IndexPageContext = createContext<IndexPageContextValue>(
  {} as IndexPageContextValue
);
const IndexPageContextProvider: FC = ({ children }) => {
  const [pageNum, setPageNum] = useState("");
  return (
    <IndexPageContext.Provider value={{ pageNum, setPageNum }}>
      {children}
    </IndexPageContext.Provider>
  );
};
