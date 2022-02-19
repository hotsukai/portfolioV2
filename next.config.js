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
  },
};
