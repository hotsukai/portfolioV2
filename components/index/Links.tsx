/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { FC } from "react";

import SectionHeightScreen from "./Section1Page";
import styles from "./links.module.css";

type LinkWithLogoProps = {
  imageSrc: string;
  title: string;
  href: string;
};
const LinkWithLogo: FC<LinkWithLogoProps> = ({ imageSrc, title, href }) => (
  <a target="_blank" rel="noreferrer" href={href}>
    <p
      className={classNames(
        styles["title"],
        "pb-1 relative pl-8 lg:pl-0 lg:hover:pl-8"
      )}
    >
      <img
        src={imageSrc}
        alt={`${title} logo`}
        loading="lazy"
        className={classNames(
          styles["icon"],
          "h-4 lg:h-6 absolute top-2/4 -translate-y-1/2 left-0 inline-block opacity-100 lg:opacity-0 visible lg:invisible"
        )}
      />
      {title}
    </p>
  </a>
);

type Props = {};
const Links: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="p-10 w-full bg-white">
        <h2 className="mb-4 text-xl">Links</h2>
        <div className="my-4">
          <h3 className="mb-2 text-lg">Tech</h3>
          <LinkWithLogo
            title="Twitter"
            href="https://twitter.com/hotsukai"
            imageSrc="/images/twitter.png"
          />
          <LinkWithLogo
            title="GitHub"
            href="https://github.com/hotsukai"
            imageSrc="/images/GitHub.png"
          />
          <LinkWithLogo
            title="Zenn"
            href="https://zenn.dev/hotsukai"
            imageSrc="https://unpkg.com/simple-icons@6.10.0/icons/zenn.svg"
          />
          <LinkWithLogo
            title="Qiita"
            href="https://qiita.com/hotsukai"
            imageSrc="https://unpkg.com/simple-icons@6.10.0/icons/qiita.svg"
          />
        </div>
        <div className="my-4">
          <h3 className="mb-2 text-lg">Photos</h3>
          <LinkWithLogo
            title="Instagram"
            href="https://www.instagram.com/hotsukai_pic/"
            imageSrc="/images/instagram.png"
          />
        </div>
        <div className="my-4">
          <h3 className="mb-2 text-lg">Career</h3>
          <LinkWithLogo
            title="Wantedly"
            href="https://www.wantedly.com/id/hotsukai"
            imageSrc="/images/Wantedly.png"
          />
          <LinkWithLogo
            href="mailto:kaihotsu.kotaro.c@gmail.com"
            title="Mail"
            imageSrc="/images/mail.png"
          />
        </div>
      </div>
      <div className="ml-8 w-5/12 bg-white" role="presentation" />
    </SectionHeightScreen>
  );
};
export default Links;
