import { FC } from "react";

import { H1, H2, H3 } from "./Headings";

import { RichText } from "app";

type Props = { richText: RichText };
const RichTextArea: FC<Props> = ({ richText }) => {
  if (richText.type === "p") return <p>{richText.body}</p>;
  if (richText.type === "p-mb") return <p className="mb-4">{richText.body}</p>;
  if (richText.type === "h1") return <H1>{richText.body}</H1>;
  if (richText.type === "h2")
    return <H2 className="mt-8 mb-2">{richText.body}</H2>;
  if (richText.type === "h3") return <H3>{richText.body}</H3>;
  return <></>;
};
export default RichTextArea;
