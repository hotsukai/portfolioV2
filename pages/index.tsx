import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { ArticleMetaInfo, Product, RichLine } from "app";
import AboutMe from "components/index/AboutMe";
import BackGroundImage from "components/index/BackgroundImage";
import Links from "components/index/Links";
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
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="overflow-y-scroll relative h-screen snap-y snap-mandatory">
        <BackGroundImage />
        <AboutMe aboutMe={aboutMe} />
        <Links />
        <Works articlesMetaInfo={articlesMetaInfo} products={products} />
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
