export default {
  title: "Upstamps Docs",
  description: "UpStamps Documentation",
  menu: ["Getting Started", "Components"],
  dest: "/docs",
  ignore: ['README.md', 'CHANGELOG.md', 'LICENSE', 'build/**', 'build', 'node_modules'],
  htmlContext: {
    favicon: "https://avatars.dicebear.com/v2/male/dd.svg"
  },
  themeConfig: {
    mode: "light",
    logo: {
      src: "https://avatars.dicebear.com/v2/male/dd.svg",
      margin: "auto",
      width: 128
    }
  },
  typescript: true
};
