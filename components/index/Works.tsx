import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, VFC } from "react";

import SectionHeightScreen from "./Section1Page";

import { ArticleMetaInfo, Product } from "app";
import { H2, H3 } from "components/common/Headings";

type ProductsProps = {
  products: Product[];
};
const Products: VFC<ProductsProps> = ({ products }) => (
  <div className="flex">
    {products.map((product) => (
      <div key={product.title}>
        {/* {product.link && (
          <a href={product.link} target="_blank" rel="noopener noreferrer"></a>
        )} */}
        <div className="relative z-0 w-40 h-40 bg-slate-800 border border-white md:w-56 md:h-56 lg:w-80 lg:h-72">
          {product.coverImage && (
            <Image
              src={product.coverImage}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="absolute w-128"
            />
          )}
          <div className="flex absolute top-0 left-0 z-10 flex-col justify-center items-center p-2 w-40 h-40 text-center text-white bg-slate-800/30 hover:opacity-100 transition-opacity md:p-4 md:w-56 md:h-56 lg:p-8 lg:w-80 lg:h-72 lg:bg-slate-800/70 lg:opacity-0">
            <p className="text-sm md:text-base lg:text-lg">{product.title}</p>
            <p className="text-sm">{product.season}</p>
            {/* <Tags titles={product.technologyStack}></Tags> */}
            <div className="flex mt-2 space-x-4">
              {product.GitHub && (
                <a
                  href={product.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 fill-white lg:h-6"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              )}
              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="h-4 fill-white lg:h-6"
                  />
                </a>
              )}
            </div>
            <p className="hidden mt-2 text-sm lg:block">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

type Props = {
  articlesMetaInfo: ArticleMetaInfo[];
  products: Product[];
};
const Works: FC<Props> = ({ articlesMetaInfo, products }) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="ml-8 w-full bg-white" role="presentation" />
      <div className="p-10 w-11/12 bg-white">
        <H2 className="text-xl">Works</H2>
        <div className="my-6">
          <H3 className="text-lg">Products</H3>
          <div className="overflow-x-scroll h-44 md:h-60 lg:h-80">
            <Products products={products} />
          </div>
        </div>
        <div className="my-6">
          <H3 className="text-lg">Articles</H3>
          <div className="overflow-x-scroll h-44 md:h-60 lg:h-64">
            <div className="flex ">
              {articlesMetaInfo.map((article) => (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={article.url}
                >
                  <div className="mr-4 w-40 md:w-56 lg:w-80">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={240}
                      className="absolute top-0"
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
export default Works;
