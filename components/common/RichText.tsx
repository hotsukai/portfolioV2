import { RichText } from "app";
import { FC } from "react";

type Props = { richText: RichText };
const RichTextArea: FC<Props> = ({ richText }) => {
  if (richText.type === "p") return <p>{richText.body}</p>;
  if (richText.type === "p-mb") return <p className="mb-4">{richText.body}</p>;
  if (richText.type === "h1")
    return <h1 className="text-xl font-bold">{richText.body}</h1>;
  if (richText.type === "h2")
    return <h2 className="text-xl">{richText.body}</h2>;
  if (richText.type === "h3")
    return <h3 className="text-lg">{richText.body}</h3>;
  return <></>;
};
export default RichTextArea;
