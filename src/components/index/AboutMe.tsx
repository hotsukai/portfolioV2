import classNames from "classnames";
import { FC } from "react";

import SectionHeightScreen from "./Section1Page";
import styles from "./scroll-bar.module.css";

import { RichLine } from "app";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import RichLinesElem from "components/common/RichText";

type Props = {
  aboutMe: RichLine[];
};
const AboutMe: FC<Props> = ({ aboutMe }) => {
  return (
    <SectionHeightScreen className="snap-center">
      <Header />
      <div className="flex relative justify-between text-white">
        <div className="w-4 bg-white" role="presentation" />
        <div className="z-0 grow">
          <div className="flex justify-center content-center items-center h-screen-mobile">
            <h1 className="text-lg text-white">
              開發 功太郎
              <br />
              <span className="text-sm"> Kaihotsu Kotaro</span>
            </h1>
          </div>
          <div className="px-1 mb-20 md:px-4 lg:px-8">
            <RichLinesElem lines={aboutMe} />
          </div>
          <p
            className={classNames(
              "text-sm font-light text-center mb-10",
              styles.scroll
            )}
          >
            SCROLL
          </p>
        </div>
        <div className="w-4 bg-white" role="presentation" />
      </div>
      <Footer />
    </SectionHeightScreen>
  );
};
export default AboutMe;
