import Card from "components/common/Card";
import { FC } from "react";
import SectionHeightScreen from "./Section1Page";

type Props = {};
const Products: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="snap-center flex justify-between">
      <div className="bg-white w-2/12 mr-4 md:mr-8" role="presentation" />
      <div className="bg-white w-full p-10">
        <h2 className="text-lg">Products</h2>
        <Card>
          <p>Coming Soon 🚧</p>
        </Card>
      </div>
    </SectionHeightScreen>
  );
};
export default Products;
