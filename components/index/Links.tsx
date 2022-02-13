/* eslint-disable @next/next/no-img-element */
import Card from "components/common/Card";
import { FC } from "react";
import SectionHeightScreen from "./Section1Page";
import Image from "next/image";
import styles from "./links.module.css";
import classNames from "classnames";

type LinkWithLogoProps = {
  imageSrc: string;
  title: string;
  href: string;
};
const LinkWithLogo: FC<LinkWithLogoProps> = ({ imageSrc, title, href }) => (
  <a target="_blank" rel="noreferrer" href={href}>
    <p className={classNames(styles["title"], "pb-1 relative hover:pl-8")}>
      <img
        src={imageSrc}
        alt={`${title} logo`}
        loading="lazy"
        className={classNames(
          styles["icon"],
          "h-6 absolute top-0 bottom-0 left-0 inline-block"
        )}
      />
      {title}
    </p>
  </a>
);

type Props = {};
const Links: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="snap-center flex justify-between">
      <div className="bg-white w-full p-10">
        <h2 className="text-xl mb-4">Links</h2>
        <LinkWithLogo
          title="GitHub"
          href="https://github.com/hotsukai"
          imageSrc="/images/GitHub.png"
        />
        <LinkWithLogo
          title="Twitter"
          href="https://twitter.com/hotsukai"
          imageSrc="/images/twitter.png"
        />
        <LinkWithLogo
          title="Instagram"
          href="https://www.instagram.com/hotsukai_pic/"
          imageSrc="/images/instagram.png"
        />
        <LinkWithLogo
          title="Wantedly"
          href="https://www.wantedly.com/id/hotsukai"
          imageSrc="/images/Wantedly.png"
        />
        <a target="_blank" rel="noreferrer" href="https://zenn.dev/hotsukai">
          <p className="pb-1">Zenn</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://qiita.com/hotsukai">
          <p className="pb-1">Qiita</p>
        </a>
        <LinkWithLogo
          href="mailto:kaihotsu.kotaro.c@gmail.com"
          title="Mail"
          imageSrc="/images/mail.png"
        />
      </div>
      <div className="bg-white w-5/12 ml-8" role="presentation" />
    </SectionHeightScreen>
  );
};
export default Links;
