import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import { RichText } from "app";
import AboutMe from "components/index/AboutMe";
import BackGroundImage from "components/index/BackgroundImage";
import Links from "components/index/Links";
import Products from "components/index/Products";
import { SITE_NAME } from "const";
import fetchAboutMe from "repository/aboutme";
import fetchArticleOGPInfo, { fetchAllArticle } from "repository/fetchArticle";

type Props = {
  aboutMe: RichText[];
};
const Home: NextPage<Props> = ({ aboutMe }) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="overflow-y-scroll relative h-screen snap-y snap-mandatory">
        <BackGroundImage />
        <AboutMe aboutMe={aboutMe} />
        <Links />
        <Products />
      </main>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const aboutMe = await fetchAboutMe();
  // const articles = await fetchArticleOGPInfo(
  //   "https://zenn.dev/hotsukai/articles/enpit2021_memo"
  // );

  const articlesMetaInfo = await fetchAllArticle();

  return { props: { aboutMe, articlesMetaInfo } };
};

export default Home;
