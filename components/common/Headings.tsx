import classNames from "classnames";
import { FC } from "react";

type Props = {} & JSX.IntrinsicElements["h1"] &
  JSX.IntrinsicElements["h2"] &
  JSX.IntrinsicElements["h3"];
export const H1: FC<Props> = ({ children, className, ...props }) => (
  <h1 className={classNames("mb-6 text-xxl", className)} {...props}>
    {children}
  </h1>
);
export const H2: FC<Props> = ({ children, className, ...props }) => (
  <h2 className={classNames("mb-4 text-xl", className)} {...props}>
    {children}
  </h2>
);
export const H3: FC<Props> = ({ children, className, ...props }) => (
  <h3 className={classNames("mb-2 text-lg", className)} {...props}>
    {children}
  </h3>
);
