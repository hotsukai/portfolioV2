import classNames from "classnames";
import { FC, MutableRefObject } from "react";

type Props = {
  className?: string;
  pageNumber?: string;
  _ref?: MutableRefObject<HTMLDivElement>;
};

/**
 * 高さがスクリーンと同じボックス
 */
const SectionHeightScreen: FC<Props> = ({ className, children, _ref }) => (
  <section
    className={classNames("h-screen overflow-y-scroll", className)}
    ref={_ref}
  >
    {children}
  </section>
);

export default SectionHeightScreen;
