import Card from "components/common/Card";
import { FC } from "react";
import SectionHeightScreen from "./Section1Page";

type Props = {};
const Products: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="snap-center flex justify-between">
      <div className="bg-white w-2/12 mr-4 md:mr-8" role="presentation" />
      <div className="bg-white w-full p-10">
        <h2>Product</h2>
        <Card>
          <h3>名前</h3>
          <div>説明説明説明説明説明説明説明説明</div>
        </Card>
      </div>
    </SectionHeightScreen>
  );
};
export default Products;
