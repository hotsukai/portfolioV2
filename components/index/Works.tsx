import Image from "next/image";
import { FC } from "react";

import SectionHeightScreen from "./Section1Page";

import { ArticleMetaInfo } from "app";
import { H2, H3 } from "components/common/Headings";

type Props = {
  articlesMetaInfo: ArticleMetaInfo[];
};
const Products: FC<Props> = ({ articlesMetaInfo }) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="ml-8 w-full bg-white" role="presentation" />
      <div className="p-10 w-11/12 bg-white">
        <H2 className="text-xl">Works</H2>
        <div className="my-6">
          <H3 className="text-lg">Products</H3>
          <p>Coming Soon 🚧</p>
        </div>
        <div className="my-6">
          <H3 className="text-lg">Articles</H3>
          <div className="overflow-x-scroll h-40 md:h-72 lg:h-80">
            <div className="flex ">
              {articlesMetaInfo.map((article) => (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={article.url}
                >
                  <div className="mr-4 w-60 md:w-72 lg:w-96">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={240}
                      className="absolute top-0 w-96"
                      objectFit="contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionHeightScreen>
  );
};
export default Products;
