import classNames from "classnames";
import { FC } from "react";

type Props = { className?: string };
const Card: FC<Props> = ({ className, children }) => {
  return <div className={classNames("p-4", className)}>{children}</div>;
};
export default Card;
