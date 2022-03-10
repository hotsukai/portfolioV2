import classNames from "classnames";
import { FC } from "react";

type Props = {
  className?: string;
  pageNumber?: string;
};

/**
 * 高さがスクリーンと同じボックス
 */
const SectionHeightScreen: FC<Props> = ({ className, children }) => (
  <section className={classNames("h-screen overflow-y-scroll", className)}>
    {children}
  </section>
);

export default SectionHeightScreen;
