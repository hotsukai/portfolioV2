import { FC } from "react";
import classNames from "classnames";
type Props = {
  className?: string;
};
const Section1Page: FC<Props> = ({ className, children }) => {
  return (
    <section
      className={classNames(
        "static h h-screen border-2 border-red-500 overflow-y-scroll",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section1Page;
