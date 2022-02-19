import { getNotionPage, getRowsFromNotionDB, PRODUCT_DB_ID } from "infrastructure/notion"

const fetchProducts = async () => {
  const res = await getRowsFromNotionDB(PRODUCT_DB_ID)
  const tasks = res.map(r => getNotionPage(r.id))
  const pages = await Promise.all(tasks)
  console.log(JSON.stringify(pages, undefined, 2))

}

export default fetchProducts