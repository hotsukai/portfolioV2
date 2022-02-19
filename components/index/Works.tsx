import Image from "next/image";
import { FC } from "react";

import SectionHeightScreen from "./Section1Page";

import { ArticleMetaInfo, Product } from "app";
import { H2, H3 } from "components/common/Headings";
import RichLineElem from "components/common/RichText";

type Props = {
  articlesMetaInfo: ArticleMetaInfo[];
  products: Product[];
};
const Products: FC<Props> = ({ articlesMetaInfo, products }) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="ml-8 w-full bg-white" role="presentation" />
      <div className="p-10 w-11/12 bg-white">
        <H2 className="text-xl">Works</H2>
        <div className="my-6">
          <H3 className="text-lg">Products</H3>
          {products.map((product) => (
            <div key={product.title}>
              {product.coverImage && (
                <Image
                  src={product.coverImage}
                  alt={product.title}
                  width={400}
                  height={240}
                  className="absolute top-0 w-96"
                  objectFit="contain"
                />
              )}
              <p>{product.title}</p>
              <p>{product.season}</p>
              <p>{product.technologyStack}</p>
              <p>{product.GitHub}</p>
              <p>{product.link}</p>
              {product.content.map((line, map) => (
                <RichLineElem richLine={line} key={map} />
              ))}
            </div>
          ))}
        </div>
        <div className="my-6">
          <H3 className="text-lg">Articles</H3>
          <div className="overflow-x-scroll h-44 md:h-60 lg:h-80">
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
