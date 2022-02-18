import { FC } from "react";

import SectionHeightScreen from "./Section1Page";

import { H2, H3 } from "components/common/Headings";

type Props = {};
const Products: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="mr-4 w-2/12 bg-white md:mr-8" role="presentation" />
      <div className="p-10 w-full bg-white">
        <H2 className="text-xl">Works</H2>
        <div className="my-6">
          <H3 className="text-lg">Products</H3>
          <p>Coming Soon 🚧</p>
        </div>
        <div className="my-6">
          <H3 className="text-lg">Articles</H3>
          <p>Coming Soon 🚧</p>
        </div>
      </div>
    </SectionHeightScreen>
  );
};
export default Products;
