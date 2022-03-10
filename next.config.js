/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com", // Zenn
      "qiita-user-contents.imgix.net", // Qiita
      "storage.googleapis.com", // Google Cloud Storage
    ],
  },
};
