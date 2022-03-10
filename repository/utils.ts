import axios from "axios";

import { ContentType } from "app";

export const extractFilenameFromUrl = (url: string) => {
  const pathname = new URL(url).pathname;
  return pathname.substring(pathname.lastIndexOf('/') + 1);
}

export const fetchBlogAsString = async (url: string, contentType: ContentType): Promise<Buffer> => {
  const res = await axios.get(url, {
    responseType: 'arraybuffer', 'headers': {
      'Content-Type': contentType
    }
  })
  const buffer = Buffer.from(res.data)
  return buffer
}

export const extractExtensionFromFilename = (filename: string): 'jpg' | 'png' | '' => {
  if (filename.match(/\.jpe?g$/)) return 'jpg'
  if (filename.match(/\.png$/)) return 'png'
  return ''
}