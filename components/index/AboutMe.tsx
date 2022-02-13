import { RichText } from "app";
import classNames from "classnames";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import RichTextArea from "components/common/RichText";
import { FC } from "react";
import SectionHeightScreen from "./Section1Page";
import styles from "./scroll-bar.module.css";

type Props = {
  aboutMe: RichText[];
};
const AboutMe: FC<Props> = ({ aboutMe }) => {
  return (
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
          <div className="mb-20 px-1 md:px-4 lg:px-8">
            {aboutMe.map((am) => (
              <RichTextArea richText={am} key={am.body} />
            ))}
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
        <div className="z w-4 bg-white" />
      </div>
      <Footer />
    </SectionHeightScreen>
  );
};
export default AboutMe;
