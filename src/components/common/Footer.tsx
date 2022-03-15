import { FC } from "react";

type Props = {};
const Footer: FC<Props> = ({}) => {
  return (
    <footer className="absolute bottom-0 left-0 z-20 py-3 w-full text-xs text-center text-gray-500 bg-white">
      @2021, Kaihotsu Kotaro
    </footer>
  );
};
export default Footer;
