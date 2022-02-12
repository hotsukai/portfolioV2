import { FC } from "react";

type Props = {};
const Links: FC<Props> = ({}) => {
  return (
    <SectionHeightScreen className="snap-center flex justify-between">
      <div className="bg-white w-full p-10">
        <h2>Links</h2>
        <Card>
          <h3>名前</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/hotsukai"
          >
            @hotsukai
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/hotsukai_pic/"
          >
            @hotsukai_pic
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.wantedly.com/id/hotsukai"
          >
            @hotsukai_pic
          </a>
          <div>kaihotsu.kotaro.c@gmail.com</div>
        </Card>
      </div>
      <div className="bg-white w-5/12 ml-8" role="presentation" />
    </SectionHeightScreen>
  );
};
export default Links;
