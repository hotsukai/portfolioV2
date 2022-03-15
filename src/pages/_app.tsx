import type { AppProps } from "next/app";
import { useEffect } from "react";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const setViewHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setViewHeight();
    window.addEventListener("resize", () => {
      setViewHeight();
    });
    return () => {
      window.removeEventListener("resize", setViewHeight);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
