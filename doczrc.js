export default {
  title: "UpStamps Documentation",
  description: "UpStamps Documentation",
  menu: ["Introduction", "Getting Started", "React Integration", "API Reference"],
  dest: "/docs",
  public: "/public",
  files: "**/*.{md,mdx}",
  ignore: [
    "README.md",
    "CHANGELOG.md",
    "LICENSE",
    "build/**",
    "build",
    "node_modules"
  ],
  htmlContext: {
    favicon: "https://avatars.dicebear.com/v2/male/dd.svg"
  },
  themeConfig: {
    mode: "light"
  },
  typescript: true
};
