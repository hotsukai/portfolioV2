import { useContext, VFC } from "react";

import { IndexPageContext } from "pages";

const PageNum: VFC = () => {
  const { pageNum } = useContext(IndexPageContext);
  return <span className="fixed right-2 bottom-2 bg-white">{pageNum}</span>;
};

export default PageNum;
