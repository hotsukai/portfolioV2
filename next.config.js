/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "qiita-user-contents.imgix.net",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
    ],

    minimumCacheTTL: 60 * 60 * 24 * 365, // Next.js側で画像のキャッシュを1年間やってもらう。Notionの画像URLは1時間で無効になるためにNext側で画像の実態を保つ必要がある。
  },
};
