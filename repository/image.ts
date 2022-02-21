import fs from 'fs'
const saveImage = (imageBinary: Uint8Array, path: string) => {
  fs.writeFile(path, imageBinary, (error: any) => {
    if (error) {
      console.log(error)
      throw error
    }
  })
}

export const fetchBlobFromUrl = async (url: string): Promise<Blob | null> => {
  try {
    const blob = await fetch(url).then((r) => r.blob())
    return blob
  } catch (error) {
    console.log(error)
    return null
  }
}

export default saveImage