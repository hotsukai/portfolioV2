import classNames from "classnames";
import { FC } from "react";
type Props = {
  className?: string;
};

/**
 * 高さがスクリーンと同じボックス
 */
const SectionHeightScreen: FC<Props> = ({ className, children }) => {
  return (
    <section
      className={classNames("static h-screen overflow-y-scroll", className)}
    >
      {children}
    </section>
  );
};

export default SectionHeightScreen;
