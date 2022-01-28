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
      <main className="snap-y snap-mandatory overflow-y-scroll relative h-screen">
        <Section1Page className="snap-center">
          <Header />
          <div className="flex justify-center text-white relative">
            <BackGroundImage />
            <div className="z-0 w-11/12">
              <div className="flex justify-center h-screen content-center items-center">
                <h1 className="text-white text-lg">
                  開發 功太郎
                  <br className="" />
                  <span className="text-sm"> Kaihotsu Kotaro</span>
                </h1>
              </div>
              <div className="my-20">
                MainContent ここがページごとに変わる
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>激長メッセージです</p>
                <p>Scroll More</p>
              </div>
            </div>
          </div>
          <Footer />
        </Section1Page>
        <Section1Page className="snap-center bg-white">aaaa</Section1Page>
        <Section1Page className="snap-center bg-white">aaaa</Section1Page>
        <Section1Page className="snap-center bg-white">aaaa</Section1Page>
      </main>
    </>
  );
};

export default Home;
