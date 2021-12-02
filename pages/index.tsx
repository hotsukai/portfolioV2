import BackGroundImage from "components/BackgroundImage";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-white">
      <BackGroundImage/>
      <div className="flex justify-center w-screen h-screen content-center items-center">
        <h1 className="text-white text-lg">
          開發 功太郎
          <br className="" />
          <span className="text-sm"> Kaihotsu Kotaro</span>
        </h1>
      </div>
      <header className="my-20">header</header>
      <main className="my-20">MainContent ここがページごとに変わる</main>
      <footer className="my-20">@2021, Kaihotsu Kotaro</footer>
    </div>
  );
};

export default Home;
