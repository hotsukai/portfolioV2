import { FC } from "react";

type Props = {};
const Footer: FC<Props> = ({}) => {
  return (
    <footer
      className="absolute bottom-0 left-0  w-full bg-white z-20 py-3 text-xs text-gray-500 text-center"
      style={{ paddingLeft: "2.5%" }} // メインの背景画像幅が95% なため
    >
      @2021, Kaihotsu Kotaro
    </footer>
  );
};
export default Footer;
