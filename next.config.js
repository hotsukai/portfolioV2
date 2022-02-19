/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "qiita-user-contents.imgix.net",
      "www.notion.so",
    ],
  },
};
