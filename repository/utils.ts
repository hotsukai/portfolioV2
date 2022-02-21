import { Product } from "app";

// ホントはproductsに書きたいけど、クライアント側から'./image.ts'を読むと死ぬので一旦ここにおいている
export const buildImagePath = (product: Product) => `public/images/products/${product.title}.png`
