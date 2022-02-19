import { Product } from "app"
import { getNotionPage, getRowsFromNotionDB, PRODUCT_DB_ID } from "infrastructure/notion"

const fetchProducts = async (): Promise<Product[]> => {
  const res = await getRowsFromNotionDB(PRODUCT_DB_ID)
  const tasks = res.map(r => getNotionPage<Product>(r.id))
  return Promise.all(tasks)
}

export default fetchProducts