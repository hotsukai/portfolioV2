import { extractExtensionFromFilename, extractFilenameFromUrl, fetchBlogAsString } from "./utils"

import { Product } from "app"
import { saveImage } from "infrastructure/firebase"
import { getNotionPage, getRowsFromNotionDB, PRODUCT_DB_ID } from "infrastructure/notion"

type ProductHasCoverImage = Omit<Product, 'coverImage'> & { 'coverImage': string }

const fetchProducts = async (): Promise<Product[]> => {
  const res = await getRowsFromNotionDB(PRODUCT_DB_ID)
  const fetchNotionPageTasks = res.map(r => getNotionPage<Product>(r.id))
  const products = await Promise.all(fetchNotionPageTasks)

  const saveImageAndUpdateImageUrlTasks = products
    .filter((p: Product): p is ProductHasCoverImage => p.coverImage !== null)
    .map(async (product) => {
      const filename = extractFilenameFromUrl(product.coverImage as string)
      const extension = extractExtensionFromFilename(filename)
      const contentType = extension === 'jpg' ?
        'image/jpeg' : extension === 'png' ?
          'image/png' : null
      if (contentType === null) throw new Error("カバー画像にJPG/PNG以外のものが指定されました。");

      const imageBuffer = await fetchBlogAsString(product.coverImage, contentType)
      const imageUrl = await saveImage(filename, imageBuffer, contentType)
      return {
        ...product,
        coverImage: imageUrl
      } as Product
    })
  return Promise.all(saveImageAndUpdateImageUrlTasks)
}

export default fetchProducts