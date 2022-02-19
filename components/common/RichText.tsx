import { FC, VFC } from "react";

import { H1, H2, H3 } from "./Headings";

import { RichLine, RichText } from "app";

type RichLineElemProps = { richLine: RichLine };
const RichLineElem: FC<RichLineElemProps> = ({ richLine }) => {
  if (richLine.type === "p")
    return (
      <p>
        <RichTextElem richTexts={richLine.body} />
      </p>
    );
  // if (richText.type === "p-mb") return <p className="mb-4">{richText.body}</p>;
  if (richLine.type === "h1")
    return (
      <H1>
        <RichTextElem richTexts={richLine.body} />
      </H1>
    );
  if (richLine.type === "h2")
    return (
      <H2 className="mt-8 mb-2">
        <RichTextElem richTexts={richLine.body} />
      </H2>
    );
  if (richLine.type === "h3")
    return (
      <H3>
        <RichTextElem richTexts={richLine.body} />
      </H3>
    );
  if (richLine.type === "li")
    return (
      <li>
        <RichTextElem richTexts={richLine.body} />
      </li>
    );
  return <br></br>; // FIXME 暫定処理で、セマンティックじゃないので治す
};

type RichTextElemProps = { richTexts: RichText[] };
const RichTextElem: VFC<RichTextElemProps> = ({ richTexts }) => {
  const texts = richTexts.map((richText) =>
    richText.type === "a" ? (
      <a href={richText.href} target="_blank" rel="noopener noreferrer">
        {richText.body}
      </a>
    ) : richText.type === "normal" ? (
      <>{richText.body}</>
    ) : (
      <></>
    )
  );
  return <>{texts}</>;
};
export default RichLineElem;
