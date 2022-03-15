import { FC } from "react";

type Props = {};
const Header: FC<Props> = ({}) => {
  return (
    <header
      className="absolute top-0 z-20 py-3 w-full text-lg text-black bg-white"
      style={{ paddingLeft: "2.5%" }} // メインの背景画像幅が95% なため
    >
      Kaihotsu Kotaro
    </header>
  );
};
export default Header;
