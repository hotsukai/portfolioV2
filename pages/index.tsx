import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-white">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background:
            'linear-gradient(to top, rgba(255,255,255,0.5), rgba(0,0,0,0.5)), url("images/forest.jpg") ',
          backgroundSize: "cover",
          zIndex: -1,
          position: "fixed",
        }}
      ></div>
      <div className="flex justify-center w-screen h-screen content-center items-center">
        <h1 className="text-white">
          開發 功太郎
          <br className="" />
          (Kaihotsu Kotaro)
        </h1>
      </div>
      <header className="my-20">header</header>
      <main className="my-20">MainContent ここがページごとに変わる</main>
      <footer className="my-20">@2021, Kaihotsu Kotaro</footer>
    </div>
  );
};

export default Home;
