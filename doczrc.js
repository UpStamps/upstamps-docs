export default {
  title: "UpStamps Documentation",
  description: "UpStamps Documentation",
  menu: ["Introduction", "Getting Started", "Integrations", "API Reference"],
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
  themeConfig: {
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
      background: "#e8e4e6",
      primary: "#d99738",
      border: "none",
      header: {
        bg: "#e8e4e6",
        text: "black",
        button: {
          bg: "#f9bc60",
          color: "#FFF"
        }
      },
      sidebar: {
        bg: "#e8e4e6",
        navLinkActive: "#d99738"
      }
    }
  },
  typescript: true
};
