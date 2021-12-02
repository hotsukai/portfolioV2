import BackGroundImage from "components/BackgroundImage";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center text-white relative">
      <header
        className="text-black fixed w-full bg-white z-20 py-3 text-lg"
        style={{ paddingLeft: "2.5%" }} // メインの背景画像幅が95% なため
      >
        Kaihotsu Kotaro
      </header>
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
      <footer
        className="fixed bottom-0 left-0  w-full bg-white z-20 py-3 text-xs text-gray-500 text-center"
        style={{ paddingLeft: "2.5%" }} // メインの背景画像幅が95% なため
      >
        @2021, Kaihotsu Kotaro
      </footer>
    </div>
  );
};

export default Home;
