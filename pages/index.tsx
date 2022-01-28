import BackGroundImage from "components/BackgroundImage";
import Footer from "components/Footer";
import Header from "components/Header";
import Section1Page from "components/Section1Page";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center text-white relative">
        <BackGroundImage />
        <main className="z-0 w-11/12">
          <div className="flex justify-center h-screen content-center items-center">
            <h1 className="text-white text-lg">
              開發 功太郎
              <br className="" />
              <span className="text-sm"> Kaihotsu Kotaro</span>
            </h1>
          </div>
          <div className="my-20">MainContent ここがページごとに変わる</div>
        </main>
      </div>
      <Section1Page />
      <Footer />
    </>
  );
};

export default Home;
