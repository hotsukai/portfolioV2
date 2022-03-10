import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";

import { ArticleMetaInfo, Product, RichLine } from "app";
import AboutMe from "components/index/AboutMe";
import BackGroundImage from "components/index/BackgroundImage";
import Links from "components/index/Links";
import Works from "components/index/Works";
import { useOnScreen } from "components/index/useOnScreen";
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
  const linksRef = useRef<HTMLDivElement>(null!);
  const worksRef = useRef<HTMLDivElement>(null!);
  const linksStatus = useOnScreen(linksRef);
  const worksStatus = useOnScreen(worksRef);
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="overflow-y-scroll relative h-screen snap-y snap-mandatory">
        <BackGroundImage />
        <AboutMe aboutMe={aboutMe} />
        <Links _ref={linksRef} />
        <Works
          _ref={worksRef}
          articlesMetaInfo={articlesMetaInfo}
          products={products}
        />
        <span className="fixed right-2 bottom-2 bg-white">
          {linksStatus === "VISIBLE"
            ? "2/3"
            : worksStatus === "VISIBLE"
            ? "3/3"
            : ""}
        </span>
      </main>
    </>
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
