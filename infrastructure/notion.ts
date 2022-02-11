import { Client, LogLevel } from "@notionhq/client"

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG //fixme
})

console.log('token', process.env.NOTION_TOKEN);


export default notionClient