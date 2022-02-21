import saveImage, { fetchBlobFromUrl } from "./image"
import { buildImagePath } from "./utils"

import { Product } from "app"
import { getNotionPage, getRowsFromNotionDB, PRODUCT_DB_ID } from "infrastructure/notion"

const fetchProducts = async (): Promise<Product[]> => {
  const res = await getRowsFromNotionDB(PRODUCT_DB_ID)
  const tasks = res.map(r => getNotionPage<Product>(r.id))

  const products = await Promise.all(tasks)
  const saveImageTasks = products.map(async product => {
    if (!product.coverImage) return
    const blob = await fetchBlobFromUrl(product.coverImage)
    if (!blob) return
    const binary = await blob.arrayBuffer()
    saveImage(Buffer.from(binary) as Uint8Array, buildImagePath(product))
  })
  await Promise.all(saveImageTasks)
  return products
}

export default fetchProducts