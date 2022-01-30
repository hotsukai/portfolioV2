import BackGroundImage from "components/BackgroundImage";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import SectionHeightScreen from "components/Section1Page";
import { SITE_NAME } from "const";
import type { NextPage } from "next";
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
            <div className="z w-4 bg-white" />

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
          <div className="bg-white w-2/12 mr-8" role="presentation" />
          <div className="bg-white w-full p-10">
            <h2>Product</h2>
            <Card>
              <h3>名前</h3>
              <div>説明説明説明説明説明説明説明説明</div>
            </Card>
          </div>
        </SectionHeightScreen>
        <SectionHeightScreen className="snap-center flex justify-between">
          <div className="bg-white w-full p-10">
            <h2>Work History</h2>
            <Card>
              <h3>名前</h3>
              <div>説明説明説明説明説明説明説明説明</div>
            </Card>
          </div>
          <div className="bg-white w-2/12 ml-8" role="presentation" />
        </SectionHeightScreen>
        <SectionHeightScreen className="snap-center flex justify-between">
          <div className="bg-white w-full p-10">
            <h2>Accounts</h2>
            <Card>
              <h3>名前</h3>
              <div>説明説明説明説明説明説明説明説明</div>
            </Card>
          </div>
          <div className="bg-white w-5/12 ml-8" role="presentation" />
        </SectionHeightScreen>
      </main>
    </>
  );
};

export default Home;
