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
      header: {
        bg: "#004643",
        text: "white",
        button: {
          bg: "#f9bc60",
          color: "#FFF"
        }
      },
      sidebar: {
        bg: "#FFF",
        navLinkActive: "#d99738"
      }
    }
  },
  typescript: true
};
