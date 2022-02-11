import BackGroundImage from "components/BackgroundImage";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import SectionHeightScreen from "components/Section1Page";
import { SITE_NAME } from "const";
import { career } from "data/career";
import notionClient from "infrastructure/notion";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <main className="snap-y snap-mandatory overflow-y-scroll relative h-screen">
        <BackGroundImage />
        <SectionHeightScreen className="snap-center">
          <Header />
          <div className="flex justify-between text-white relative">
            <div className="w-4 bg-white" />
            <div className="z-0 grow">
              <div className="flex justify-center h-screen content-center items-center">
                <h1 className="text-white text-lg">
                  開發 功太郎
                  <br className="" />
                  <span className="text-sm"> Kaihotsu Kotaro</span>
                </h1>
              </div>
              <div className="my-20">
                <p>2018 筑波大学 情報学群 情報メディア創成学類 入学</p>
                <p>2021 融合知能デザイン研究室 </p>
                <p>写真を取ることと料理を作ること・食べることが好き．</p>
                <p>
                  プロダクトを作ることが好き,
                  スクラムとフロントエンドに興味がある．
                </p>
                <p className="text-lg text-center">Scroll More</p>
                <span className="material-icons-outlined">expand_more</span>
              </div>
            </div>
            <div className="z w-4 bg-white" />
          </div>
          <Footer />
        </SectionHeightScreen>
        <SectionHeightScreen className="snap-center flex justify-between">
          <div className="bg-white w-2/12 mr-4 md:mr-8" role="presentation" />
          <div className="bg-white w-full p-10">
            <h2>Product</h2>
            <Card>
              <h3>名前</h3>
              <div>説明説明説明説明説明説明説明説明</div>
            </Card>
          </div>
        </SectionHeightScreen>
        <SectionHeightScreen className="snap-center flex justify-between ">
          <div className="bg-white w-full p-10" />
          <div className="bg-white w-2/12 ml-8" role="presentation" />
          <div className="absolute">
            <Card className="text-white mix-blend-lighten">
              <h2 className="text-lg">Work History</h2>
              {career.interns.map((intern) => (
                <div className="mb-4" key={intern.name}>
                  <h4 dangerouslySetInnerHTML={{ __html: intern.name }} />
                  <p>{intern.season}</p>
                  <p>{intern.description}</p>
                </div>
              ))}
            </Card>
            <Card>
              <h2 className="text-lg">Education</h2>
              {career.educations.map((edu) => (
                <div className="mb-4" key={edu.name}>
                  <h4 dangerouslySetInnerHTML={{ __html: edu.name }} />
                  <p>{edu.season}</p>
                </div>
              ))}
            </Card>
          </div>
        </SectionHeightScreen>
        <SectionHeightScreen className="snap-center flex justify-between">
          <div className="bg-white w-full p-10">
            <h2>Links</h2>
            <Card>
              <h3>名前</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/hotsukai"
              >
                @hotsukai
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hotsukai_pic/"
              >
                @hotsukai_pic
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.wantedly.com/id/hotsukai"
              >
                @hotsukai_pic
              </a>
              <div>kaihotsu.kotaro.c@gmail.com</div>
            </Card>
          </div>
          <div className="bg-white w-5/12 ml-8" role="presentation" />
        </SectionHeightScreen>
      </main>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const pageId = "b8351c12c16e4417bc252a32c98c9967";
  const response = await notionClient.databases.query({
    database_id: process.env.NOTON_DB_ID as string,
  });
  console.log("res", response);

  return { props: { a: "a" } };
};

export default Home;
