import BackGroundImage from "components/index/BackgroundImage";
import Card from "components/common/Card";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import SectionHeightScreen from "components/index/Section1Page";
import { SITE_NAME } from "const";
import fetchAboutMe from "infrastructure/repository/aboutme";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "app";
import RichTextArea from "components/common/RichText";
import classNames from "classnames";
import AboutMe from "components/index/AboutMe";
import Products from "components/index/Products";
import Links from "components/index/Links";
type Props = {
  aboutMe: RichText[];
};
const Home: NextPage<Props> = ({ aboutMe }) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="snap-y snap-mandatory overflow-y-scroll relative h-screen">
        <BackGroundImage />
        <AboutMe aboutMe={aboutMe} />
        <Products />
        <Links />
      </main>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const aboutMe = await fetchAboutMe();

  return { props: { aboutMe } };
};

export default Home;
