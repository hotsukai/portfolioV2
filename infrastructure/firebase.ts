import { getApps, cert, initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import { ContentType } from "app";

if (getApps().length === 0) {
  const credEscaped = JSON.parse(process.env.FIREBASE_CRED as string);
  initializeApp({
    credential: cert({
      ...credEscaped,
      privateKey: credEscaped.private_key.replace(/\\n/g, "\n"), // PEMの改行文字がJSONから文字列にするときにエスケープされてしまう。エスケープをここで解除する。
    }),
    storageBucket: "portfolio-26a6a.appspot.com",
  });
}

const bucket = getStorage().bucket();

export const saveImage = async (filename: string, image: string | Buffer, contentType: ContentType): Promise<string> => {
  const file = bucket.file(filename);
  try {
    await file.save(image);
    await file.setMetadata({ contentType: contentType });
  } catch (err) {
    console.log(err);
  }
  file.makePublic()
  return file.publicUrl()
}