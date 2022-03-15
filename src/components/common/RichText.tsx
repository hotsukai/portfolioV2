import classNames from "classnames";
import { FC, Fragment, VFC } from "react";

import { H1, H2, H3 } from "./Headings";

import { RichLine, RichText } from "app";

const RichLinesElem: VFC<{ lines: RichLine[] }> = ({ lines }) => (
  <>
    {lines.map((line, i) => (
      <Fragment key={i}>
        <RichLineElem
          richLine={line}
          key={i}
          className={classNames({
            "mb-4": lines.length > i + 1 && lines[i + 1].type === "emptyLine",
          })}
        />
      </Fragment>
    ))}
  </>
);

type RichLineElemProps = { richLine: RichLine; className: string };
const RichLineElem: FC<RichLineElemProps> = ({ richLine, className }) => {
  if (richLine.type === "p")
    return (
      <p className={className}>
        <RichTextElem richTexts={richLine.body} />
      </p>
    );
  // if (richText.type === "p-mb") return <p className="mb-4">{richText.body}</p>;
  if (richLine.type === "h1")
    return (
      <H1 className={className}>
        <RichTextElem richTexts={richLine.body} />
      </H1>
    );
  if (richLine.type === "h2")
    return (
      <H2 className={(classNames("mt-8 mb-2"), className)}>
        <RichTextElem richTexts={richLine.body} />
      </H2>
    );
  if (richLine.type === "h3")
    return (
      <H3 className={className}>
        <RichTextElem richTexts={richLine.body} />
      </H3>
    );
  if (richLine.type === "li")
    return (
      <li className={className}>
        <RichTextElem richTexts={richLine.body} />
      </li>
    );
  return <></>;
};

type RichTextElemProps = { richTexts: RichText[] };
const RichTextElem: VFC<RichTextElemProps> = ({ richTexts }) => {
  const texts = richTexts.map((richText, i) =>
    richText.type === "a" ? (
      <a href={richText.href} target="_blank" rel="noopener noreferrer" key={i}>
        {richText.body}
      </a>
    ) : richText.type === "normal" ? (
      <Fragment key={i}>{richText.body}</Fragment>
    ) : (
      <Fragment key={i}></Fragment>
    )
  );
  return <>{texts}</>;
};
export default RichLinesElem;
