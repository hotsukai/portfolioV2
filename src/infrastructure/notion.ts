import { Client, LogLevel } from "@notionhq/client";
import {
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { Dictionary, RichLine, RichText } from "app";
import { deleteUndefined, ExtractHasProp_Type } from "utils";

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG, //fixme
});

export const PRODUCT_DB_ID = "b8351c12c16e4417bc252a32c98c9967";
export const ABOUTME_PAGE_ID = "9d856afa12644e4cb4671748bf620aa2";
export const ARTICLE_DB_ID = "0d28a03de26c4692984f25974f683470";

export default notionClient;

/**
 * ListBlockChildrenResponseをRichTextにパースする
 */
const parseNotionBlockChildrenResponseToRichBlock = (
  response: ListBlockChildrenResponse
): RichLine[] => {
  const unsafeRichLines: Array<RichLine | undefined> = response.results.map(
    (result) => {
      if (!("type" in result)) return;
      return parseNotionBlocksToRichBlocks(result);
    }
  );
  return deleteUndefined<RichLine | undefined>(unsafeRichLines);
};

type NotionBlockObjectResponseUnion =
  ListBlockChildrenResponse["results"][number];
type NotionBlockObjectRequest = ExtractHasProp_Type<
  NotionBlockObjectResponseUnion,
  string
>;
const parseNotionBlocksToRichBlocks = (
  block: NotionBlockObjectRequest
): RichLine | undefined => {
  const resultType = block.type;

  if (resultType === "paragraph" && block.paragraph.text.length > 0) {
    const body = parseNotionRichTextsItemToRichTexts(block.paragraph.text);
    return {
      type: "p",
      body,
    };
  }
  if (resultType === "paragraph" && block.paragraph.text.length === 0)
    return {
      type: "emptyLine",
    };
  if (resultType === "heading_1") {
    const body = parseNotionRichTextsItemToRichTexts(block.heading_1.text);
    return {
      type: "h1",
      body,
    };
  }
  if (resultType === "heading_2") {
    const body = parseNotionRichTextsItemToRichTexts(block.heading_2.text);
    return {
      type: "h2",
      body,
    };
  }
  if (resultType === "heading_3") {
    const body = parseNotionRichTextsItemToRichTexts(block.heading_3.text);
    return {
      type: "h3",
      body,
    };
  }
  if (resultType === "bulleted_list_item") {
    const body = parseNotionRichTextsItemToRichTexts(
      block.bulleted_list_item.text
    );
    return {
      type: "li",
      body,
    };
  }
  return;
};

const parseNotionRichTextsItemToRichTexts = (
  notionRichTexts: ExtractHasProp_Type<
    NotionBlockObjectRequest,
    "paragraph"
  >["paragraph"]["text"]
): RichText[] => {
  const unsafes: (RichText | undefined)[] = notionRichTexts.map((text) => {
    if (text.href === null) return { type: "normal", body: text.plain_text };
    if (text.href !== null)
      return { type: "a", body: text.plain_text, href: text.href };
  });
  return deleteUndefined<RichText | undefined>(unsafes);
};

export type GetNotionPageOutput<T> = {
  content: RichLine[];
  title: string;
  coverImage: string | null;
} & T;
/**
 * Notion のページを取得し整形して返す
 * @param block_id
 * @returns
 */
export const getNotionPage = async <T>(
  block_id: string
): Promise<GetNotionPageOutput<T>> => {
  const [body, meta] = await Promise.all([
    notionClient.blocks.children.list({ block_id }),
    notionClient.pages.retrieve({ page_id: block_id }),
  ]);
  if ("properties" in meta) {
    const coverImage =
      (meta.cover?.type === "external"
        ? meta.cover.external.url
        : meta.cover?.file.url) ?? null;
    const title =
      ("type" in meta.properties &&
        meta.properties.title.type === "title" &&
        meta.properties.title.title[0].plain_text) ||
      "";

    const formattedRow: Dictionary = {} as Dictionary;
    Object.keys(meta.properties).forEach((key) => {
      const col = meta.properties[key];
      if (col.type === "title" && col.title)
        formattedRow[key] = col.title[0].plain_text;
      if (col.type === "url" && col.url) formattedRow[key] = col.url;
      if (col.type === "select" && col.select)
        formattedRow[key] = col.select.name;
      if (col.type === "multi_select")
        formattedRow[key] = col.multi_select.map((item) => item.name);
      if (col.type === "rich_text")
        formattedRow[key] = col.rich_text.reduce(
          (prev, item) => prev + item.plain_text,
          ""
        );
    });

    return {
      title,
      coverImage,
      content: parseNotionBlockChildrenResponseToRichBlock(body),
      ...(formattedRow as unknown as T),
    };
  }
  throw new Error(`page: ${block_id} is not valid`);
};

type Row = {
  values: {
    [key: string]: string | string[];
  };
  id: string;
};

/**
 * NotionDBのレスポンスを整形する
 * @param response
 * @returns
 */
const parseNotionQueryDBResponseToArrOfDict = (
  response: QueryDatabaseResponse
): Row[] => {
  const rows: Row[] = [];
  response.results.forEach((row) => {
    if (!("properties" in row)) return undefined;

    const formattedRow: Row = { id: row.id, values: {} } as Row;
    Object.keys(row.properties).forEach((key) => {
      const col = row.properties[key];
      if (col.type === "title" && col.title)
        formattedRow.values[key] = col.title[0].plain_text;
      if (col.type === "url" && col.url) formattedRow.values[key] = col.url;
      if (col.type === "select" && col.select)
        formattedRow.values[key] = col.select.name;
      if (col.type === "multi_select")
        formattedRow.values[key] = col.multi_select.map((item) => item.name);
      if (col.type === "rich_text")
        formattedRow.values[key] = col.rich_text.reduce(
          (prev, item) => prev + item.plain_text,
          ""
        );
    });

    rows.push(formattedRow);
  });

  return rows;
};

/**
 * Notion DBを叩く
 * @param database_id
 * @returns
 */
const fetchAllFromDB = async (
  database_id: string
): Promise<QueryDatabaseResponse> =>
  notionClient.databases.query({
    database_id,
    sorts: [
      {
        property: "createdAt",
        direction: "descending",
      },
    ],
  });

/**
 * Notion DBを叩き結果を整形して返す
 * @param database_id
 * @returns
 */
export const getRowsFromNotionDB = async (
  database_id: string
): Promise<Row[]> => {
  const res = await fetchAllFromDB(database_id);
  return parseNotionQueryDBResponseToArrOfDict(res);
};
