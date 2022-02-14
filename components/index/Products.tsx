import { FC } from "react";

import SectionHeightScreen from "./Section1Page";

import Card from "components/common/Card";

type Props = {};
const Products: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="flex justify-between snap-center">
      <div className="mr-4 w-2/12 bg-white md:mr-8" role="presentation" />
      <div className="p-10 w-full bg-white">
        <h2 className="text-lg">Products</h2>
        <Card>
          <p>Coming Soon 🚧</p>
        </Card>
      </div>
    </SectionHeightScreen>
  );
};
export default Products;
